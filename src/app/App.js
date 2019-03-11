import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'
import uid from 'uid'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../form/Form'
import AppHeader from '../header/Header'
import {
  getAllQuestions,
  getDataFromStorage,
  postNewQuestion,
  saveDataToStorage,
  voteQuestion,
} from '../services'
import Sort from '../sort/Sort'
import GlobalStyle from './GlobalStyle'
dayjs.extend(relativeTime)

export default function App() {
  const [data, setData] = useState(getDataFromStorage())

  const [questions, setQuestions] = useState(getDataFromStorage())

  useEffect(() => {
    getAllQuestions().then(res => {
      setQuestions(res.data)
    })
  }, [])

  function createQuestion(question) {
    console.log(questions)
    postNewQuestion(question).then(res => {
      console.log(res.data)
      setQuestions([...questions, res.data])
    })
  }

  function upvote(id) {
    const question = questions.find(question => question._id === id)
    voteQuestion(question)
      .then(res => {
        const index = questions.indexOf(question)
        setQuestions([
          ...questions.slice(0, index),
          { ...res },
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
    setData([
      {
        name: input.name,
        message: input.message,
        date: dayjs(),
        votes: 0,
        id: uid(),
        liked: false,
        avatar: input.color,
        isnew: true,
      },
      ...data,
    ])
  }

  useEffect(() => {
    saveDataToStorage(data)
  }, [data])

  /*function upvote(id) {
    const question = data.find(question => question.id === id)
    const i = data.indexOf(question)
    if (question.liked) {
      setData([
        ...data.slice(0, i),
        { ...question, liked: !question.liked, votes: question.votes - 1 },
        ...data.slice(i + 1),
      ])
    } else {
      setData([
        ...data.slice(0, i),
        { ...question, liked: !question.liked, votes: question.votes + 1 },
        ...data.slice(i + 1),
      ])
    }
  }*/

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
      return data
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
        total={data.length}
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
          liked={question.liked}
          onClick={upvote}
          isnew={question.isnew}
          changeNew={changeNew}
        />
      ))}
      <Modal />
      <GlobalStyle />
    </React.Fragment>
  )
}
