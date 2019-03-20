import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import io from 'socket.io-client'
import AppHeader from '../header/Header'
import Home from '../routes/Home'
import Admin from '../routes/Admin'
import {
  getAllQuestions,
  getUserDataFromStorage,
  postNewQuestion,
  saveUserDataToStorage,
  seenQuestion,
  voteQuestion,
} from '../services'
import './app.css'
import GlobalStyle from './GlobalStyle'

dayjs.extend(relativeTime)
const socket = io('http://localhost:4000')

export default function App() {
  const [sortCriteria, setSortCriteria] = useState('recent')
  const [openModal, setOpenModal] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentRoute, setCurrentRoute] = useState('Questions')

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
      socket.on('newQuestion', res => handleNewQuestion(res))
      socket.on('newLike', res => handleNewLike(res))
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    if (!userData) {
      getUserDataFromStorage()
    }
    saveUserDataToStorage(userData)
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

  function changeNew(id) {
    const question = questions.find(q => q._id === id)
    if (
      question.seen.filter(seen => seen.user.toString() === userData).length ===
      0
    ) {
      seenQuestion(question, userData)
        .then(question.seen.push({ user: userData }))
        .catch(err => console.log(err))
    }
  }

  return (
    <Router>
      <React.Fragment>
        <AppHeader currentRoute={currentRoute} />
        <Route
          exact
          path="/"
          render={() => (
            <Home
              setCurrentRoute={newRoute => setCurrentRoute(newRoute)}
              userData={userData}
              addQuestion={addQuestion}
              onOpenModalClick={onOpenModalClick}
              questions={questions}
              sortCriteria={sortCriteria}
              sortData={sortData}
              openModal={openModal}
              closeModal={closeModal}
              onSortClick={onSortClick}
              upvote={upvote}
              changeNew={changeNew}
            />
          )}
        />
        <Route
          exact
          path="/admin"
          render={() => <Admin setCurrentRoute={setCurrentRoute} />}
        />
        <GlobalStyle />
      </React.Fragment>
    </Router>
  )
}
