import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'
import uid from 'uid'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../form/Form'
import CForm from '../form/CForm'
import AppHeader from '../header/Header'
import {
  getDataFromStorage,
  saveDataToStorage,
  getAllQuestions,
  postNewQuestion,
  voteQuestion,
} from '../services'
import Sort from '../sort/Sort'
import GlobalStyle from './GlobalStyle'
dayjs.extend(relativeTime)

export default function App() {
  const [data, setData] = useState(getDataFromStorage())

  const [questions, setQuestions] = useState(getFromServer())

  function getFromServer() {
    getAllQuestions().then(res => {
      return res
    })
  }

  function createQuestion(question) {
    postNewQuestion(question).then(res => {
      setQuestions([...questions, res])
    })
  }

  function upvote(id) {
    const question = questions.find(question => question.id === id)
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
  const [expandedForm, setExpandendForm] = useState(false)
  function addQuestion(input) {
    if (input.name === '') {
      input.name = 'Anonymous'
    }
    setData([
      {
        name: input.name,
        message: input.message,
        date: dayjs(),
        votes: 0,
        id: uid(),
        liked: false,
        avatar: input.color,
        isNew: true,
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
      return data.sort(function(a, b) {
        return dayjs(b.date) - dayjs(a.date)
      })
    } else if (sortCriteria === 'popular') {
      return data.sort(function(a, b) {
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
    const question = data.find(question => question.id === id)
    if (question.isNew) question.isNew = false
  }

  function onFocusHandler() {
    setExpandendForm(true)
  }

  function onBlurHandler() {
    setExpandendForm(false)
  }

  /*function AddQuestionForm() {
    if (!expandedForm) {
      return <CForm onFocusHandler={onFocusHandler} />
    } else {
      return <Form onBlurHandler={onBlurHandler} submitForm={addQuestion} />
    }
  }*/

  return (
    <React.Fragment>
      <AppHeader />
      <Form onBlurHandler={onBlurHandler} submitForm={addQuestion} />{' '}
      <CardsHeader
        onOpenModalClick={onOpenModalClick}
        sortCriteria={sortCriteria}
        total={data.length}
      />
      {sortData(sortCriteria).map(question => (
        <Card
          avatar={question.avatar}
          key={question.id}
          id={question.id}
          name={question.name}
          message={question.message}
          date={dayjs().to(question.date)}
          votes={question.votes}
          liked={question.liked}
          onClick={upvote}
          isNew={question.isNew}
          changeNew={changeNew}
        />
      ))}
      <Modal />
      <GlobalStyle />
    </React.Fragment>
  )
}
