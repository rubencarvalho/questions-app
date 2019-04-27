import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import io from 'socket.io-client'
import AppHeader from '../header/Header'
import Admin from '../routes/Admin'
import Home from '../routes/Home'
import {
  getAllQuestions,
  getUserDataFromStorage,
  postNewQuestion,
  saveUserDataToStorage,
  voteQuestion,
  updateSeen,
} from '../services'
import './app.css'
import GlobalStyle from './GlobalStyle'

dayjs.extend(relativeTime)
const socket = io('http://localhost:4000')

export default function App() {
  const [sortCriteria, setSortCriteria] = useState('recent')
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
    socket.emit('newSeen', { question: res, userid: userData })
  }

  useEffect(() => {
    try {
      getAllQuestions().then(res => {
        updateSeen(res.data.map(question => question._id), userData)
        setQuestions(res.data)
      })
      socket.on('newQuestion', res => handleNewQuestion(res))
      socket.on('newLike', res => handleNewLike(res))
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    updateSeen(questions.map(question => question._id), userData)
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

  function changeNew(id) {
    const question = questions.find(q => q._id === id)
    if (
      question.seen.filter(seen => seen.user.toString() === userData).length ===
      0
    ) {
      question.seen.push({ user: userData })
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
              questions={questions}
              setSortCriteria={setSortCriteria}
              sortCriteria={sortCriteria}
              sortData={sortData}
              upvote={upvote}
              changeNew={changeNew}
            />
          )}
        />
        <Route
          exact
          path="/admin"
          render={() => (
            <Admin
              questions={questions}
              setCurrentRoute={setCurrentRoute}
              sortData={sortData}
            />
          )}
        />
        <GlobalStyle />
      </React.Fragment>
    </Router>
  )
}
