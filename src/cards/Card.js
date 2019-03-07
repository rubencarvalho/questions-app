import React from 'react'
import styled from 'styled-components'
import SVGIcon from '../utilities/Icons.js'

const StyledCard = styled.section`
  @keyframes background {
    0% {
      background-color: #fef8ca;
    }
    70% {
      background-color: #fef8ca;
    }
    100% {
      background-color: white;
    }
  }
  animation: background 2s ease-in-out;
  font-size: 14px;
  display: grid;
  grid-template-rows: 40px auto;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  padding: 16px 20px 16px 20px;
  color: #555;
  grid-gap: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11), 0 2px 4px rgba(0, 0, 0, 0.15);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`
const Header = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 56px;
  align-items: center;
`
const Avatar = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.1);
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

const Action = styled.div`
  width: 100%;
  display: flex;
  height: 26px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  -webkit-appearance: none;
  align-items: center;
  justify-content: center;
  &:last-child {
    border-radius: 50px;
  }
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.05);
    }
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
const Votes = styled.div`
  min-width: 16px;
  text-align: right;
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
          <SVGIcon
            name="user"
            fill="rgba(0,0,0,0.4)"
            height="65%"
            width="65%"
          />
        </Avatar>
        <Items>
          <Author>{name}</Author>
          <Date>{date}</Date>
        </Items>
        <Action onClick={() => onClick(id)}>
          <Votes style={liked ? { color } : null}>{votes}</Votes>
          <SVGIcon name="upvote" fill={color} height="60%" width="60%" />
        </Action>
      </Header>
      <Message>{message}</Message>
    </StyledCard>
  )
}
