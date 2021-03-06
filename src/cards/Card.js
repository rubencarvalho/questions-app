import React, { useEffect } from 'react'
import styled from 'styled-components'
import Icon from '../utilities/Icons.js'
const StyledCard = styled.section`
  font-size: 14px;
  display: grid;
  grid-template-rows: 40px auto;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  padding: 16px 20px 16px 20px;
  color: #555;
  grid-gap: 8px;
  background-color: ${p => {
    if (p.status.highlight === true) {
      return '#f0f5fe'
    } else {
      return '#fff'
    }
  }};
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  @media (min-width: 651px) {
    &:first-of-type {
      border-radius: 4px 4px 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 4px 4px;
      margin-bottom: 40px;
    }
  }

  @keyframes card-background {
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
  font-weight: 700;
  font-size: 12px;
  color: white;
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
  transition: all 0.3s ease;

  &:last-child {
    border-radius: 50px;
  }
  @media (hover: hover) {
    &:hover {
      transition: all 0.3s ease;

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
  overflow-wrap: break-word;
  word-break: break-word;
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
  avatar,
  changeNew,
  isnew,
  question,
}) {
  function getInitials() {
    let names = name.split(' ')
    let initials = names[0].substring(0, 1).toUpperCase()
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials
  }
  function AvatarContent() {
    if (name !== 'Anonymous') {
      return getInitials()
    } else {
      return (
        <Icon name="user" fill="rgba(0,0,0,0.4)" height="65%" width="65%" />
      )
    }
  }
  useEffect(() => {
    if (isnew === true) {
      changeNew(id)
    }
  }, [])
  function getColor() {
    if (liked === true) {
      return '#2181c2'
    } else {
      return 'rgba(0, 0, 0, 0.4)'
    }
  }
  const color = getColor()
  return (
    <StyledCard
      status={question.status}
      style={
        isnew === true ? { animation: 'card-background 1s ease-in-out' } : null
      }
    >
      <Header>
        <Avatar
          style={name !== 'Anonymous' ? { backgroundColor: avatar } : null}
        >
          <AvatarContent />
        </Avatar>
        <Items>
          <Author>{name}</Author>
          <Date>{date}</Date>
        </Items>
        <Action onClick={() => onClick(id)}>
          <Votes style={liked ? { color } : null}>{votes}</Votes>
          <Icon name="upvote" fill={color} height="60%" width="60%" />
        </Action>
      </Header>
      <Message>{message}</Message>
    </StyledCard>
  )
}
