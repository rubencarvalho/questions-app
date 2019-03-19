import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../form/Form'
import AppHeader from '../header/Header'
import {
  getAllQuestions,
  getUserDataFromStorage,
  postNewQuestion,
  saveUserDataToStorage,
  seenQuestion,
  voteQuestion,
} from '../services'
import Sort from '../sort/Sort'
import './app.css'
import GlobalStyle from './GlobalStyle'
import axios from 'axios'
dayjs.extend(relativeTime)
const questionsPath = `http://localhost:4000/questions`
const socket = io('http://localhost:4000')

export default function App() {
  const [sortCriteria, setSortCriteria] = useState('recent')
  const [openModal, setOpenModal] = useState(false)
  const [questions, setQuestions] = useState([])
  const [userData] = useState(getUserDataFromStorage())

  // getAllQuestions().then(res => setQuestions(res.data))

  async function fetchQuestions() {
    const result = await axios.get(questionsPath)
    console.log(result.data)
    setQuestions(res.data)
  }

  useEffect(() => {
    fetchQuestions()
    if (!userData) {
      getUserDataFromStorage()
    }
    saveUserDataToStorage(userData)
    fetchQuestions()
    socket.on('newQuestion', res => {
      setQuestions([res, ...questions])
    })
    socket.on('newLike', res => {
      const question = questions.find(q => q._id === res._id)
      const index = questions.indexOf(question)
      setQuestions([
        ...questions.slice(0, index),
        res,
        ...questions.slice(index + 1),
      ])
    })
    return () => {}
  }, [])

  function upvote(id) {
    const question = questions.find(question => question._id === id)
    voteQuestion(question, userData)
      .then()
      .catch(err => console.log(err))
  }

  function addQuestion(input) {
    postNewQuestion(input, userData)
  }

  function sortData(sortCriteria) {
    if (sortCriteria === 'recent') {
      return questions.sort(function(a, b) {
        return dayjs(b.date) - dayjs(a.date)
      })
    } else if (sortCriteria === 'popular') {
      return questions.sort(function(a, b) {
        return b.votes.length - a.votes.length
      })
    } else if (sortCriteria === 'myquestions') {
      return questions.filter(question => question.authorid === userData)
    }
  }

  function onSortClick(newSortCriteria) {
    setOpenModal(false)
    setSortCriteria(newSortCriteria)
  }
  function closeModal() {
    setOpenModal(false)
  }
  function onOpenModalClick() {
    setOpenModal(!openModal)
  }

  function Modal() {
    if (openModal) {
      return (
        <Sort
          activeCriteria={sortCriteria}
          closeModal={closeModal}
          onSortClick={onSortClick}
        />
      )
    } else {
      return null
    }
  }

  function changeNew(id) {
    const question = questions.find(q => q._id === id)
    const index = questions.indexOf(question)
    if (
      question.seen.filter(seen => seen.user.toString() === userData).length ===
      0
    ) {
      seenQuestion(question, userData)
        .then(res => {
          setTimeout(
            () =>
              setQuestions([
                ...questions.slice(0, index),
                res.data,
                ...questions.slice(index + 1),
              ]),
            2200
          )
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <React.Fragment>
      <AppHeader />
      <Form submitForm={addQuestion} />
      <CardsHeader
        questions={questions}
        onOpenModalClick={onOpenModalClick}
        sortCriteria={sortCriteria}
        total={sortData(sortCriteria).length}
      />
      {sortData(sortCriteria).map(question => (
        <Card
          key={question._id}
          avatar={question.color}
          id={question._id}
          name={question.name}
          message={question.message}
          date={dayjs().to(question.date)}
          votes={question.votes.length}
          liked={question.votes.some(item => item.user === userData)}
          onClick={upvote}
          isnew={!question.seen.some(item => item.user === userData)}
          changeNew={changeNew}
        />
      ))}
      <Modal />
      <GlobalStyle />
    </React.Fragment>
  )
}
