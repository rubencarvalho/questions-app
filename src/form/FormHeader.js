import React from 'react'
import styled from 'styled-components'
const Header = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  margin: 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  line-height: 17.5px;
  max-width: 650px;
  padding: 25px 16px 14px 16px;
  justify-content: space-between;
`
export default function FormHeader() {
  return <Header>Ask the speaker</Header>
}
