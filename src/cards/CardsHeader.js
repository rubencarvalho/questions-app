import React from 'react'
import styled from 'styled-components'
const Header = styled.div`
  font-size: 14px;
  display: flex;
  max-width: 650px;
  padding: 20px 16px 20px 16px;
  color: #555;
  justify-content: space-between;
`
export default function CardsHeader({ total }) {
  return <Header>{total} questions</Header>
}
