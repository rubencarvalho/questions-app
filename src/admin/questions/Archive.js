import React from 'react'
import styled from 'styled-components'
import Icon from '../../utilities/Icons'
import ArchiveCard from '../questions/card/ArchiveCard'
import dayjs from 'dayjs'
import { Hover } from '../../cards/Hover'

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

export default function Archive({ questions, sortData, userData }) {
  const EmptyPlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  `

  function NoQuestionsScreen() {
    if (
      questions.filter(question => question.status.archive === true).length ===
      0
    ) {
      return (
        <EmptyPlaceholder>
          <Hover
            onHover={
              <Icon
                style={{ marginBottom: '10px', transition: 'fill .3s ease' }}
                name="archived"
                width="50px"
                height="50px"
                fill="#666"
              />
            }
          >
            <Icon
              name="archived"
              width="50px"
              height="50px"
              fill="#c4c4c4"
              style={{ marginBottom: '10px', transition: 'fill .3s ease' }}
            />
          </Hover>

          <Subtitle>
            You can archive questions in the Live tab after they were answered
            or are no longer relevant.
          </Subtitle>
        </EmptyPlaceholder>
      )
    } else {
      return null
    }
  }

  function SortedCards() {
    if (questions.length > 0) {
      return sortData('recent')
        .filter(question => question.status.archive === true)
        .map(question => (
          <ArchiveCard
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
