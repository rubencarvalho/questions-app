import React from 'react'
import styled from 'styled-components'
import Icon from '../../utilities/Icons'
import AdminCard from '../questions/card/AdminCard'
import dayjs from 'dayjs'
const IncomingContainer = styled.div`
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Subtitle = styled.p`
  color: #9c9c9c;
  font-size: 17px;
  margin: 0;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 14px;
`
//Todo: export live / archive all on the kebab button

export default function Star({ questions, sortData, userData }) {
  const EmptyPlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  `

  function NoQuestionsScreen() {
    if (
      questions.filter(question => question.status.star === true).length === 0
    ) {
      return (
        <EmptyPlaceholder>
          <Icon
            style={{ marginBottom: '10px' }}
            name="star"
            width="45px"
            height="45px"
            fill="#ffca26"
          />
          <Subtitle>All starred questions will be visible here.</Subtitle>
        </EmptyPlaceholder>
      )
    } else {
      return null
    }
  }

  function SortedCards() {
    if (questions.length > 0) {
      return sortData('recent')
        .filter(question => question.status.star === true)
        .map(question => (
          <AdminCard
            route={'star'}
            userData={userData}
            question={question}
            key={question._id}
            avatar={question.color}
            id={question._id}
            name={question.name}
            message={question.message}
            date={dayjs(question.date).format('DD MMM, HH:mm')}
            votes={question.votes.length}
          />
        ))
    } else {
      return null
    }
  }

  return (
    <IncomingContainer>
      <NoQuestionsScreen />
      <SortedCards />
    </IncomingContainer>
  )
}
