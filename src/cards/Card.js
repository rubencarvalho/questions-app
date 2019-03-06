import React from 'react'
import styled from 'styled-components'
import SVGIcon from './Icons.js'

const StyledCard = styled.section`
  font-size: 14px;
  display: grid;
  grid-template-rows: 40px auto;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  padding: 20px 16px 20px 16px;
  color: #555;
  grid-gap: 8px;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.19);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`
const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 56px;
  align-items: center;
`
const Avatar = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  background: #eee;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`
const Items = styled.div`
  display: grid;
  grid-template-rows: 22px 18px;
`
const Author = styled.div`
  display: flex;
  width: 100%;
  font-weight: 500;
`
const Date = styled.div`
  display: flex;
  width: 100%;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
`

const Action = styled.button`
  display: flex;
  width: 100%;
  height: 26px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4) !important;
  -webkit-appearance: none;
  justify-content: center;
  align-items: center;
  &:first-child {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  &:focus {
    outline: none;
  }
`

const Message = styled.div`
  display: flex;
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
`

export default function Card({
  name,
  message,
  date,
  votes,
  liked,
  id,
  onClick,
}) {
  const color = liked ? '#2181c2' : 'rgba(0, 0, 0, 0.4)'

  return (
    <StyledCard>
      <Header>
        <Avatar>
          <SVGIcon name="user" fill="#555" height="65%" width="65%" />
        </Avatar>
        <Items>
          <Author>{name}</Author>
          <Date>{date}</Date>
        </Items>
        <Action onClick={() => onClick(id)}>
          <span style={liked ? { color } : null}>{votes}</span>
          <SVGIcon name="upvote" fill={color} height="65%" width="65%" />
        </Action>
      </Header>
      <Message>{message}</Message>
    </StyledCard>
  )
}
