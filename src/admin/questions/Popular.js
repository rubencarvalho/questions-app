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
const StyledButton = styled.div`
  line-height: 22px;
  padding: 6px 14px 6px 14px;
  user-select: none;

  color: #2182c3;
  border-radius: 4px;
  border: 1px solid #2182c3;
  &:hover {
    cursor: pointer;
  }
`
//Todo: export live / archive all on the kebab button

export default function Popular({ questions, sortData, userData }) {
  function Share() {
    if (navigator.share) {
      return (
        <StyledButton onClick={() => onShareClick()}>
          Share your event
        </StyledButton>
      )
    } else {
      return null
    }
  }
  function onShareClick() {
    if (navigator.share) {
      navigator
        .share({
          title: 'Qapp #neuefische',
          text: 'Ask me anything!',
          url: 'http://tryqapp.com',
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error))
    }
  }

  const EmptyPlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  `

  function NoQuestionsScreen() {
    if (
      questions.filter(question => question.status.archive === false).length ===
      0
    ) {
      return (
        <EmptyPlaceholder>
          <Icon
            style={{ marginBottom: '10px' }}
            name="live"
            width="50px"
            height="50px"
            fill="#7bbd5f"
          />
          <Subtitle>
            <span>Your audience can join at </span>
            <span style={{ fontWeight: '700' }}>tryqapp.com</span>
          </Subtitle>
          <Share />
        </EmptyPlaceholder>
      )
    } else {
      return null
    }
  }

  function SortedCards() {
    if (questions.length > 0) {
      return sortData('popular')
        .filter(question => question.status.archive === false)
        .map(question => (
          <AdminCard
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
