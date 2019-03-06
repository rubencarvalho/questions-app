import React from 'react'
import styled from 'styled-components'
import SVGIcon from './Icons.js'

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 26px;
  border: 1px solid #eee;
  border-radius: 16px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.4) !important;
  -webkit-appearance: none;
  &:active {
    background: #eee;
  }
  &:focus {
    outline: none;
  }
`
const ButtonClicked = styled.button`
  display: flex;
  width: 100%;
  height: 26px;
  border: 1px solid #eee;
  border-radius: 16px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.4) !important;
  -webkit-appearance: none;
  &:active {
    background: #eee;
  }
  &:focus {
    outline: none;
  }
`

export default function ActionButton({ liked, votes, id, onClick }) {
  const color = liked ? '#2D7BF6' : 'rgba(0, 0, 0, 0.4)'

  const clicked = liked ? (<Button onClick={() => onClick(id)}>
  {votes}
  <SVGIcon name="upvote" fill={color} height="65%" width="65%" />
</Button>) : (<Button onClick={() => onClick(id)}>
  {votes}
  <SVGIcon name="upvote" fill={color} height="65%" width="65%" />
</Button>)

  return (
    
   
  )
}
