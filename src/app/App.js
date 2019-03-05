import React from 'react'
import { useState } from 'react'
import GlobalStyle from './GlobalStyle'
import Card from '../cards/Card'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import uid from 'uid'
dayjs.extend(relativeTime)

export default function App() {
  const [data, setData] = useState([
    {
      name: 'Anonymous',
      message: 'Which were your biggest struggles while building your company?',
      date: '2019-03-05T10:51',
      votes: 2,
    },
    {
      name: 'Rúben Carvalho',
      message: 'Does fun = productivity?',
      date: '2019-03-04T10:51',
      votes: 0,
    },
    {
      name: 'Lutz',
      message:
        'Lorem, ipsum dolor sit amet consectetur dipisicing elit. Voluptates officiis nulla, molestiae tenetur. officiis nulla, molestiae tenetur. offi?',
      date: '2019-03-02T10:51',
      votes: 5,
    },
  ])

  return (
    <React.Fragment>
      {data.map(question => (
        <Card
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
