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
  text-align: center;
`

const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
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
  #2182c3
`
//Todo: export live / archive all on the kebab button

export default function Live({ questions, sortData }) {
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
          url: 'http://localhost:3000',
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error))
    }
  }
  function NoQuestionsScreen() {
    if (questions.length === 0) {
      return (
        <React.Fragment>
          <Icon
            style={{ marginBottom: '10px' }}
            name="live"
            width="50px"
            height="50px"
            fill="#7bbd5f"
          />
          <Subtitle>
            Your audience can join at{' '}
            <span style={{ fontWeight: '700' }}>localhost:3000</span>
          </Subtitle>
          <Share />
        </React.Fragment>
      )
    } else {
      return null
    }
  }

  function SortedCards() {
    if (questions.length > 0) {
      return sortData('recent').map(question => (
        <AdminCard
          key={question._id}
          avatar={question.color}
          id={question._id}
          name={question.name}
          message={question.message}
          date={dayjs().to(question.date)}
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
