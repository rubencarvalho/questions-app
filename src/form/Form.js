import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'
import SVGIcon from '../utilities/Icons'
import FormHeader from './FormHeader'

const StyledForm = styled.form`
  position: relative;
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: grid;
  grid-auto-rows: auto;
  max-width: 650px;
  min-height: 80px;
  color: #555;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11), 0 2px 4px rgba(0, 0, 0, 0.15);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`
const StyledTextarea = styled(TextareaAutosize)`
  font-size: 16px;
  line-height: 24px;
  color: rgb(85, 85, 85);
  padding: 30px 20px 44px 20px;
  border: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 80px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #999999;
  }
`

const StyledInput = styled.input`
  line-height: 24px;
  color: rgb(85, 85, 85);
  border: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #999999;
  }
`

const Avatar = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  background: #eee;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`

const NameSection = styled.section`
  display: grid;
  padding: 15px 20px 15px 20px;
  grid-template-columns: 40px 1fr 80px;
  align-items: center;
`
const Action = styled.button`
  display: flex;
  line-height: 32px;
  height: 32px;
  border: 1px solid white;
  font-size: 12px;
  background: rgb(112, 190, 78);
  color: white;
  -webkit-appearance: none;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 20px;

  &:last-child {
    border-radius: 50px;
  }

  &:focus {
    outline: none;
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: rgb(99, 177, 65);
    }
  }
`
const Length = styled.p`
  position: absolute;
  color: rgba(0, 0, 0, 0.4);
  right: 20px;
  bottom: 60px;
`

const ErrorMessage = styled.p`
  color: #f44336;
  position: absolute;
  left: 20px;
  bottom: 60px;
`

export default function Form({ submitForm }) {
  const [question, setQuestion] = useState({
    message: '',
    name: '',
  })

  function onSubmitHandler(e) {
    e.preventDefault()
    if (question.message.length <= 160) {
      submitForm(question)
      setQuestion({ message: '', name: '' })
    }
  }

  const length = 160 - question.message.length
  const errorMessage = 'Too many characters'
  return (
    <React.Fragment>
      <FormHeader />
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledTextarea
          required
          minRows={2}
          style={{ resize: 'none' }}
          value={question.message}
          onChange={e => setQuestion({ ...question, message: e.target.value })}
          placeholder="Type your question"
        />
        <Length style={length < 0 ? { color: '#f44336' } : null}>
          {length}
        </Length>
        <ErrorMessage>{length < 0 ? errorMessage : null}</ErrorMessage>
        <NameSection>
          <Avatar>
            <SVGIcon
              name="user"
              fill="rgba(0,0,0,0.4)"
              height="65%"
              width="65%"
            />
          </Avatar>
          <StyledInput
            type="text"
            value={question.name}
            onChange={e => setQuestion({ ...question, name: e.target.value })}
            placeholder="Your name (optional)"
          />
          <Action
            disabled={length < 0}
            style={length < 0 ? { backgroundColor: '#c1ddae' } : null}
          >
            SEND
          </Action>
        </NameSection>
      </StyledForm>
    </React.Fragment>
  )
}
