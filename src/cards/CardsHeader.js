import React from 'react'
import styled from 'styled-components'
const Header = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  margin: 0;
  display: flex;
  max-width: 650px;
  padding: 25px 16px 14px 16px;
  justify-content: space-between;
`
export default function CardsHeader({ total }) {
  return <Header>{total} questions</Header>
}
