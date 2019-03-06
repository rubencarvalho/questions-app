import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  display: grid;
  grid-template-rows: 40px auto;
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
  })

  function onSubmitHandler(e) {
    e.preventDefault()
    submitForm(question)
    setQuestion({ message: '', name: '' })
  }
  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <input
        type="text"
        onChange={e => setQuestion({ ...question, message: e.target.value })}
        placeholder="Type your question"
      />
      <input
        type="text"
        onChange={e => setQuestion({ ...question, name: e.target.value })}
        placeholder="Your name (optional)"
      />
      <button>Send</button>
    </StyledForm>
  )
}
