import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import uid from 'uid'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../cards/Form'
import { getDataFromStorage, saveDataToStorage } from '../services'
import GlobalStyle from './GlobalStyle'
dayjs.extend(relativeTime)

export default function App() {
  const [data, setData] = useState(getDataFromStorage())
  function addQuestion(input) {
    setData([
      ...data,
      {
        name: input.name,
        message: input.message,
        date: dayjs(),
        votes: 0,
        id: uid(),
      },
    ])
  }

  useEffect(() => {
    saveDataToStorage(data)
  }, [data])

  return (
    <React.Fragment>
      <Form submitForm={addQuestion} />
      <CardsHeader total={data.length} />
      {data.map(question => (
        <Card
          key={question.id}
          name={question.name}
          message={question.message}
          date={dayjs().to(question.date)}
          votes={question.votes}
        />
      ))}
      <GlobalStyle />
    </React.Fragment>
  )
}
