import React from 'react'
import styled from 'styled-components'
import { Hover } from '../../cards/Hover'
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
  padding-left: 20px;
  padding-right: 20px;
  font-size: 17px;
  margin: 0;
  margin-bottom: 14px;
`

//Todo: export archived on the kebab button

export default function Archived({ questions }) {
  const test = 0
  function NoQuestionsScreen() {
    if (test === 0) {
      return (
        <React.Fragment>
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
