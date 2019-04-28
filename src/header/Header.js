import React from 'react'
import Headroom from 'react-headroom'
import './header.css'
import logo from '../utilities/logo.png'
// import styled from 'styled-components'

// const Title = styled.h1`
//   line-height: 1;
//   font-size: 16px;
//   font-weight: 500;
//   height: 56px;
//   color: #fff;
//   text-transform: uppercase;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

export default function AppHeader() {
  return (
    <Headroom disableInlineStyles={true} wrapperStyle={{ height: '62px' }}>
      <img style={{ height: '26px' }} src={logo} alt={'logo'} />
    </Headroom>
  )
}
