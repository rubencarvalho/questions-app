import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'
import FormHeader from './FormHeader'

const StyledForm = styled.form`
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: grid;
  grid-template-rows: auto auto;
  max-width: 650px;
  min-height: 80px;
  padding: 20px 16px 20px 16px;
  color: #555;
  grid-gap: 8px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.19);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export default function Form({ submitForm }) {
  const [question, setQuestion] = useState({
    message: '',
    name: '',
    valid: false,
  })

  function onSubmitHandler(e) {
    e.preventDefault()
    if (question.valid) {
      submitForm(question)
      setQuestion({ message: '', name: '' })
    } else {
    }
  }

  function messageOnChange(e) {
    if (question.message.length > 160) {
      setQuestion({
        ...question,
        message: e.target.value,
        valid: false,
      })
    } else {
      setQuestion({ ...question, message: e.target.value, valid: true })
    }
  }

  return (
    <React.Fragment>
      <FormHeader />
      <StyledForm onSubmit={onSubmitHandler}>
        <Textarea
          required
          style={{ resize: 'none' }}
          value={question.message}
          onChange={messageOnChange}
          placeholder="Type your question"
        />
        <input
          type="text"
          value={question.name}
          onChange={e => setQuestion({ ...question, name: e.target.value })}
          placeholder="Your name (optional)"
        />
        <button>Send</button>
        <p>{160 - question.message.length}</p>
      </StyledForm>
    </React.Fragment>
  )
}
