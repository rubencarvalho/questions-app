import React from 'react'
import styled from 'styled-components'
import Icon from '../utilities/Icons.js'

const StyledCard = styled.section`
  font-size: 20px;
  display: grid;
  grid-template-rows: 40px auto;
  width: 100%;
  margin: 0 auto;
  padding: 16px 20px 16px 20px;
  color: white;
  grid-gap: 8px;
  background-color: ${p => {
    if (p.status.highlight === true) {
      return '#4285f4'
    } else return 'rgba(0, 0, 0, 0.3)'
  }};
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  @media (min-width: 651px) {
    border-radius: 4px;
    margin-bottom: 20px;
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
  display: flex;
  align-items: center;
  justify-content: center;
`
const Author = styled.div`
  display: flex;
  width: 100%;
  font-weight: 500;
  font-size: 12px;
`
const Action = styled.div`
  width: 100%;
  display: flex;
  height: 26px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  -webkit-appearance: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
`

const Message = styled.div`
  text-align: left;
  display: flex;
  width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
`
const Votes = styled.div`
  min-width: 16px;
  text-align: right;
  color: white;
  font-size: 1.5em;
`

export default function SlideCard({ name, message, votes, avatar, status }) {
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
  return (
    <StyledCard status={status}>
      <Header>
        <Avatar
          style={
            name !== 'Anonymous'
              ? { backgroundColor: avatar }
              : { backgroundColor: '#d0d0d0' }
          }
        >
          <AvatarContent />
        </Avatar>
        <Items>
          <Author>{name}</Author>
        </Items>
        <Action>
          <Votes>{votes}</Votes>
          <Icon name="upvote" fill={'white'} height="60%" width="60%" />
        </Action>
      </Header>
      <Message>{message}</Message>
    </StyledCard>
  )
}
