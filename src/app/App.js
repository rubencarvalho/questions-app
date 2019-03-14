import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../form/Form'
import AppHeader from '../header/Header'
import {
  getAllQuestions,
  getDataFromStorage,
  postNewQuestion,
  saveDataToStorage,
  saveUserDataToStorage,
  getUserDataFromStorage,
  voteQuestion,
} from '../services'
import Sort from '../sort/Sort'
import GlobalStyle from './GlobalStyle'
import io from 'socket.io-client'
dayjs.extend(relativeTime)

export default function App() {
  const socket = io('http://localhost:4000')
  const [sortCriteria, setSortCriteria] = useState('recent')
  const [openModal, setOpenModal] = useState(false)
  const [questions, setQuestions] = useState(getDataFromStorage())
  const [userData, setUserData] = useState(getUserDataFromStorage())
  socket.on('data1', res => {
    console.log(res)
  })
  useEffect(() => {
    setUserData(getUserDataFromStorage())
  }, [userData])

  useEffect(() => {
    saveDataToStorage(questions)
  }, [questions])

  useEffect(() => {
    saveUserDataToStorage(userData)
    console.log(userData)
  }, [])

  function createQuestion(question) {
    postNewQuestion(question).then(res => {
      setQuestions([...questions, res.data])
    })
  }

  function upvote(question) {
    voteQuestion(question, userData)
      .then()
      .catch(err => console.log(err))
  }

  function addQuestion(input) {
    createQuestion(input)
  }

  useEffect(() => {
    saveDataToStorage(questions)
  }, [questions])

  function sortData(sortCriteria) {
    if (sortCriteria === 'recent') {
      return questions.sort(function(a, b) {
        return dayjs(b.date) - dayjs(a.date)
      })
    } else if (sortCriteria === 'popular') {
      return questions.sort(function(a, b) {
        return b.votes - a.votes
      })
    } else {
      return questions
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
    if (question.isnew) question.isnew = false
  }

  return (
    <React.Fragment>
      <AppHeader />
      <Form submitForm={addQuestion} />
      <CardsHeader
        questions={questions}
        onOpenModalClick={onOpenModalClick}
        sortCriteria={sortCriteria}
        total={questions.length}
      />

      {sortData(sortCriteria).map(question => (
        <Card
          key={question._id}
          avatar={question.avatar}
          id={question._id}
          name={question.name}
          message={question.message}
          date={dayjs().to(question.date)}
          votes={question.votes}
          liked={JSON.parse(question.liked)}
          onClick={upvote}
          isnew={JSON.parse(question.isnew)}
          changeNew={changeNew}
        />
      ))}
      <Modal />
      <GlobalStyle />
    </React.Fragment>
  )
}
