import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { useState } from 'react'
import uid from 'uid'
import Card from '../cards/Card'
import Form from '../cards/Form'
import CardsHeader from '../cards/CardsHeader'
import GlobalStyle from './GlobalStyle'
dayjs.extend(relativeTime)

export default function App() {
  const [data, setData] = useState([
    {
      name: 'Anonymous',
      message: 'Which were your biggest struggles while building your company?',
      date: '2019-03-05T10:51',
      votes: 2,
      id: uid(),
    },
    {
      name: 'Rúben Carvalho',
      message: 'Does fun = productivity?',
      date: '2019-03-04T10:51',
      votes: 0,
      id: uid(),
    },
    {
      name: 'Lutz',
      message:
        'Lorem, ipsum dolor sit amet consectetur dipisicing elit. Voluptates officiis nulla, molestiae tenetur. officiis nulla, molestiae tenetur. offi?',
      date: '2019-03-02T10:51',
      votes: 5,
      id: uid(),
    },
  ])

  return (
    <React.Fragment>
      <Form />
      <CardsHeader />
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
