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
  seenQuestion,
  voteQuestion,
  getAllQuestions,
} from '../services'
import Sort from '../sort/Sort'
import './app.css'
import GlobalStyle from './GlobalStyle'

dayjs.extend(relativeTime)
const socket = io('http://172.16.100.141:4000')

export default function App() {
  const [sortCriteria, setSortCriteria] = useState('recent')
  const [openModal, setOpenModal] = useState(false)
  const [questions, setQuestions] = useState([])
  const [userData] = useState(getUserDataFromStorage())

  function handleNewLike(res) {
    setQuestions(questions => [
      ...questions.slice(
        0,
        questions.indexOf(questions.find(q => q._id === res._id))
      ),
      {
        ...questions.find(q => q._id === res._id),
        ...res,
      },
      ...questions.slice(
        questions.indexOf(questions.find(q => q._id === res._id)) + 1
      ),
    ])
  }

  function handleNewQuestion(res) {
    setQuestions(questions => [res, ...questions])
  }

  useEffect(() => {
    try {
      getAllQuestions().then(res => setQuestions(res.data))
      //socket.emit('load questions')
      //socket.on('questions are here', questions => {
      //   setQuestions(questions)
      // })
      socket.on('newQuestion', res => handleNewQuestion(res))
      socket.on('newLike', res => handleNewLike(res))
    } catch (error) {
      console.log(error)
    }
    return () => {
      socket.close()
    }
  }, [])

  useEffect(() => {
    if (!userData) {
      getUserDataFromStorage()
    }
    saveUserDataToStorage(userData)

    return () => {}
  }, [])

  function upvote(id) {
    const question = questions.find(q => q._id === id)
    voteQuestion(question, userData)
      .then()
      .catch(err => console.log(err))
  }

  function addQuestion(input) {
    postNewQuestion(input, userData)
  }

  function sortData(sortCriteria) {
    const arrayToSort = [].concat(questions)
    if (questions.length === 0) {
      return []
    }
    if (sortCriteria === 'recent') {
      return arrayToSort.sort((a, b) => {
        return dayjs(b.date) - dayjs(a.date)
      })
    } else if (sortCriteria === 'popular') {
      return arrayToSort.sort((a, b) => {
        return b.votes.length - a.votes.length
      })
    } else if (sortCriteria === 'myquestions') {
      return arrayToSort.filter(question => question.authorid === userData)
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
    if (
      question.seen.filter(seen => seen.user.toString() === userData).length ===
      0
    ) {
      seenQuestion(question, userData)
        .then(question.seen.push({ user: userData })) //res => {
        .catch(err => console.log(err))
    }
  }
  function SortedCards() {
    if (questions.length > 0) {
      return sortData(sortCriteria).map((question, index) => (
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
      ))
    } else {
      return null
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

      <SortedCards />
      <Modal />
      <GlobalStyle />
    </React.Fragment>
  )
}
