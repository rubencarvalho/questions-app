import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '../../utilities/Icons'
import { access } from 'fs'
const IncomingContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Title = styled.h3`
  font-size: 500;
  color: #9c9c9c;
  font-size: 17px;
`
const Subtitle = styled.p`
  color: #9c9c9c;
  font-size: 17px;
  margin: 0;
  margin-bottom: 14px;
`
const ModerationButton = styled.div`
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
export default function Starred({ questions }) {
  return (
    <IncomingContainer>
      <Icon name="incoming" width="60px" height="60px" />
      <Title>Moderation is.</Title>
      <Subtitle>
        {questions.length === 0
          ? 'Incoming questions from your audience will appear here.'
          : 'Incoming questions will automatically appear live.'}
      </Subtitle>
      <ModerationButton onClick={() => console.log('Clicked')} />
    </IncomingContainer>
  )
}
