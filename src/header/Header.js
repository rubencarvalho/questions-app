import React, { useEffect } from 'react'
import styled from 'styled-components'
import Icon from '../utilities/Icons.js'
import Headroom from 'react-headroom'
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

export default function AppHeader() {
  return (
    <Headroom disableInlineStyles={true} wrapperStyle={{ height: '56px' }}>
      <Title>Questions</Title>
    </Headroom>
  )
}
