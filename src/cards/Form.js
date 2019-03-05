import React from 'react'
import styled from 'styled-components'
import SVGIcon from './Icons.js'

const StyledForm = styled.form`
  font-size: 14px;
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

export default function Form() {
  return (
    <StyledForm>
      <input type="text" placeholder="your question" />
      <input type="text" placeholder="name" />
      <button>Send</button>
    </StyledForm>
  )
}
