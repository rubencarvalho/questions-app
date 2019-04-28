import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  line-height: 17.5px;
  padding: 25px 16px 14px 16px;
  justify-content: space-between;
`

const TotalText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
`

export default function CardsHeader() {
  return (
    <React.Fragment>
      <Header>
        <TotalText>Live</TotalText>
      </Header>
    </React.Fragment>
  )
}
