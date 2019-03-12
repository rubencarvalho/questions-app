import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'
import Icon from '../utilities/Icons'
import FormHeader from './FormHeader'

const StyledForm = styled.div`
  position: relative;
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: grid;
  grid-template-columns: 42px 1fr;
  grid-auto-rows: auto;
  color: #555;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11), 0 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`
const StyledTextarea = styled(TextareaAutosize)`
  font-size: 16px;
  line-height: 24px;
  border: transparent;
  align-self: center;
  padding: 20px 30px 20px 30px;
  color: rgb(85, 85, 85);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #999999;
  }
`
const Avatar = styled.div`
  display: flex;
  color: white;
  width: 100%;
  height: 100%;
  align-items: center;
`

export default function CForm({ onFocusHandler }) {
  return (
    <React.Fragment>
      <FormHeader />
      <StyledForm>
        <Avatar>
          <Icon
            style={{ alignSelf: 'center' }}
            name="write"
            fill="#83bb5d"
            height="65%"
            width="65%"
          />
        </Avatar>
        <StyledTextarea
          onFocus={onFocusHandler}
          required
          style={{ resize: 'none' }}
          placeholder="Type your question"
        />
      </StyledForm>
    </React.Fragment>
  )
}
