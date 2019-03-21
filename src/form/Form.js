import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styled from 'styled-components'
import Icon from '../utilities/Icons'
import FormHeader from './FormHeader'
import { newColor } from '../utilities/RandomColor'

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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (min-width: 651px) {
    border-radius: 4px;
  }
`
const StyledTextarea = styled(TextareaAutosize)`
  font-size: 16px;
  line-height: 24px;
  color: rgb(85, 85, 85);
  padding: 30px 20px 44px 20px;
  border: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 80px;
  font-family: Roboto, sans-serif;
  border-radius: 4px 4px 0 0;
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
  color: white;
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
  transition: all 0.3s ease;
  &:last-child {
    border-radius: 50px;
  }

  &:focus {
    outline: none;
  }
  @media (hover: hover) {
    &:hover {
      transition: all 0.3s ease;

      cursor: pointer;
      background: rgb(99, 177, 65);
    }
  }
`
const Length = styled.p`
  position: absolute;
  color: ${p => (p.length < 0 ? '#f44336' : 'rgba(0, 0, 0, 0.4)')};
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
    color: newColor(),
  })

  const [clearedInputField, setClearedInputField] = useState(false)

  function onSubmitHandler(e) {
    e.preventDefault()
    if (question.message.length <= 160) {
      submitForm(question)
      setQuestion({ message: '', name: '', color: newColor() })
    }
  }

  const length = 160 - question.message.length

  function ErrorMsg() {
    if (clearedInputField) {
      return <ErrorMessage>Please enter your question</ErrorMessage>
    } else if (length < 0) {
      return <ErrorMessage>Too many characters</ErrorMessage>
    } else {
      return null
    }
  }

  function getInitials() {
    let names = question.name.split(' ')
    let initials = names[0].substring(0, 1).toUpperCase()
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials
  }

  function AvatarContent() {
    if (question.name !== '') {
      return getInitials()
    } else {
      return (
        <Icon name="user" fill="rgba(0,0,0,0.4)" height="65%" width="65%" />
      )
    }
  }

  function handleOnKeyUp() {
    if (question.message === '') {
      setClearedInputField(true)
    } else if (clearedInputField !== false) {
      setClearedInputField(false)
    }
  }

  function handleNameKeyUp(e) {
    if (question.name === '') {
      setQuestion({ ...question, color: newColor() })
    }
  }

  return (
    <React.Fragment>
      <FormHeader />
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledTextarea
          onKeyUp={handleOnKeyUp}
          required
          minRows={2}
          style={{ resize: 'none' }}
          value={question.message}
          onChange={e => setQuestion({ ...question, message: e.target.value })}
          placeholder="Type your question"
        />
        <Length length={length}>{length}</Length>
        <ErrorMsg />
        <NameSection>
          <Avatar
            style={
              question.name !== '' ? { backgroundColor: question.color } : null
            }
          >
            <AvatarContent />
          </Avatar>
          <StyledInput
            type="text"
            value={question.name}
            onKeyUp={e => handleNameKeyUp(e)}
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
