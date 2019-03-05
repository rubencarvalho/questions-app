import React from 'react'
import { useState } from 'react'
import GlobalStyle from './GlobalStyle'
import Card from '../cards/Card'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function App() {
  const [data, setData] = useState([
    {
      name: 'Anonymous',
      message:
        'Lorem, ipsum dolor sit amet consectetur dipisicing elit. Voluptates officiis nulla, molestiae tenetur. officiis nulla, molestiae tenetur. offi?',
      date: '2019-03-05T10:51',
      votes: 2,
    },
    {
      name: 'Rúben Carvalho',
      message:
        'Lorem, ipsum dolor sit amet consectetur dipisicing elit. Voluptates officiis nulla, molestiae tenetur. officiis nulla, molestiae tenetur. offi?',
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
      <Card
        name={data[0].name}
        message={data[0].message}
        date={dayjs().to(data[0].date)}
        votes={data[0].votes}
      />
      <Card
        name={data[1].name}
        message={data[1].message}
        date={dayjs().to(data[1].date)}
        votes={data[1].votes}
      />
      <Card
        name={data[2].name}
        message={data[2].message}
        date={dayjs().to(data[2].date)}
        votes={data[2].votes}
      />
      <GlobalStyle />
    </React.Fragment>
  )
}
