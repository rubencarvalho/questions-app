import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useEffect, useState } from 'react'
import uid from 'uid'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../form/Form'
import { getDataFromStorage, saveDataToStorage } from '../services'
import GlobalStyle from './GlobalStyle'
dayjs.extend(relativeTime)

export default function App() {
  const [data, setData] = useState(getDataFromStorage())
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
      },
      ...data,
    ])
  }

  useEffect(() => {
    saveDataToStorage(data)
  }, [data])

  function upvote(id) {
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
  }

  return (
    <React.Fragment>
      <Form submitForm={addQuestion} />
      <CardsHeader total={data.length} />
      {data.map(question => (
        <Card
          key={question.id}
          id={question.id}
          name={question.name}
          message={question.message}
          date={dayjs().to(question.date)}
          votes={question.votes}
          liked={question.liked}
          onClick={upvote}
        />
      ))}
      <GlobalStyle />
    </React.Fragment>
  )
}
