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

export default function Live({ questions }) {
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
  const test = 0
  function NoQuestionsScreen() {
    if (test === 0) {
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

  return (
    <IncomingContainer>
      <NoQuestionsScreen />
    </IncomingContainer>
  )
}
