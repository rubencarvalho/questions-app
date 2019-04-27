import React from 'react'
import styled from 'styled-components'
import Icon from '../../utilities/Icons'
const IncomingContainer = styled.div`
  align-items: center;
  justify-content: center;
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
//Todo: export starred / archive starred on the kebab button

export default function Starred({ questions }) {
  const test = 0
  function NoQuestionsScreen() {
    if (test === 0) {
      return (
        <React.Fragment>
          <Icon
            style={{ marginBottom: '10px' }}
            name="star"
            width="45px"
            height="45px"
            fill="#ffca26"
          />
          <Subtitle>All starred questions will be visible here.</Subtitle>
        </React.Fragment>
      )
    } else {
      return null
    }
  }

  return (
    <IncomingContainer>
      <NoQuestionsScreen />
    </IncomingContainer>
  )
}
