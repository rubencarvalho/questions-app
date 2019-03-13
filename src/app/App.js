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
dayjs.extend(relativeTime)

export default function App() {
  const [questions, setQuestions] = useState(getDataFromStorage())
  const [userData, setUserData] = useState(getUserDataFromStorage())
  useEffect(() => {
    getAllQuestions().then(res => {
      setQuestions(res.data)
    })
    // getLiked()
  }, [])

  useEffect(() => {
    setUserData(getUserDataFromStorage())
  }, [userData])

  useEffect(() => {
    saveUserDataToStorage(userData)
    console.log(userData)
  }, [])

  function createQuestion(question) {
    postNewQuestion(question).then(res => {
      setQuestions([...questions, res.data])
    })
  }
  function getLiked() {
    const likedQuestions = questions.map(question => {
      if (question.voteids.includes(userData)) {
        question.liked = true
      } else {
        question.liked = false
      }
    })
    console.log(likedQuestions)
  }
  function upvote(id) {
    const question = questions.find(question => question._id === id)
    question.userid = userData
    voteQuestion(question)
      .then(res => {
        const index = questions.indexOf(question)
        console.log(res.data)
        setQuestions([
          ...questions.slice(0, index),
          { ...res.data },
          ...questions.slice(index + 1),
        ])
      })
      .catch(err => console.log(err))
  }

  const [sortCriteria, setSortCriteria] = useState('recent')

  const [openModal, setOpenModal] = useState(false)

  function addQuestion(input) {
    if (input.name === '') {
      input.name = 'Anonymous'
    }
    input.avatar = input.color
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
