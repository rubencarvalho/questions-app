import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../form/Form'
import AppHeader from '../header/Header'
import {
  getUserDataFromStorage,
  postNewQuestion,
  saveUserDataToStorage,
  voteQuestion,
  seenQuestion,
  saveDataToStorage,
  getAllQuestions,
} from '../services'
import Sort from '../sort/Sort'
import GlobalStyle from './GlobalStyle'
import './app.css'
dayjs.extend(relativeTime)

export default function App() {
  const socket = io('http://localhost:4000')
  const [sortCriteria, setSortCriteria] = useState('recent')
  const [openModal, setOpenModal] = useState(false)
  const [questions, setQuestions] = useState([])
  const [userData, setUserData] = useState(getUserDataFromStorage())

  //socket.on('allQuestions', res => console.log(res))

  function handleNewQuestion(question) {
    console.log(question)
  }
  //useEffect(() => {
  // return () => {
  //   socket.removeListener('newQuestion')
  // }
  //}, [])

  useEffect(() => {
    console.log('im here')
    getAllQuestions().then(res => setQuestions(res.data))
    saveUserDataToStorage(userData)
  }, [])

  useEffect(() => {
    console.log('now im here')
    socket.on('newQuestion', res => {
      console.log(questions)
      setQuestions([res, ...questions])
    })
    return () => socket.removeListener('newQuestion')
  }, [questions])

  function createQuestion(question) {
    postNewQuestion(question, userData)
  }

  function upvote(id) {
    const question = questions.find(question => question._id === id)
    const index = questions.indexOf(question)
    voteQuestion(question, userData)
      .then(res =>
        setQuestions([
          ...questions.slice(0, index),
          res.data,
          ...questions.slice(index + 1),
        ])
      )
      .catch(err => console.log(err))
  }

  function addQuestion(input) {
    createQuestion(input)
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
    const question = questions.find(question => question._id === id)
    seenQuestion(question, userData)
      .then()
      .catch(err => console.log(err))
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
