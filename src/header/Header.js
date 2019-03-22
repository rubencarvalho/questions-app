import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import './header.css'

const Title = styled.h1`
  line-height: 1;
  font-size: 16px;
  font-weight: 500;
  height: 56px;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function AppHeader({ currentRoute }) {
  return (
    <Headroom
      disable={currentRoute === 'Admin' ? true : false}
      disableInlineStyles={true}
      wrapperStyle={{ height: '62px' }}
    >
      <Title>{currentRoute}</Title>
    </Headroom>
  )
}
