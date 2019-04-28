import React from 'react'
import styled from 'styled-components'
import Icon from '../../../utilities/Icons'
import Questions from '../Questions'
import { updateStatus } from '../../../services'
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
  background-color: #fff;
  &:hover {
    .hidden-icon {
      opacity: 1;
      transition: opacity 0.1s linear;
      transition-property: opacity;
      transition-duration: 0.1s;
      transition-timing-function: linear;
      transition-delay: 0s;
    }
    background-color: rgba(0, 0, 0, 0.02);
    transition: background-color 0.1s;
  }
  @media (min-width: 651px) {
    &:first-of-type {
      border-radius: 4px 4px 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 4px 4px;
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
  grid-template-columns: 40px 1fr auto;
  align-items: center;
`

const ActionItems = styled.div`
  display: grid;
  grid-template-columns: 56px 56px 56px 28px;
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
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
`
const Date = styled.div`
  display: flex;
  width: 100%;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  align-items: center;
`

const Star = styled.div`
  width: 100%;
  display: flex;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.3);
  -webkit-appearance: none;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
  border-radius: 50%;

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

const Archive = styled.div`
  width: 100%;
  display: flex;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  -webkit-appearance: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin: 0 auto;
  border-radius: 50%;
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

const Highlight = styled.div`
  width: 100%;
  display: flex;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  -webkit-appearance: none;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin: 0 auto;
  border-radius: 50%;
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

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Like = styled.div`
  min-width: 16px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export default function AdminCard({
  question,
  name,
  message,
  date,
  votes,
  avatar,
  userData,
}) {
  let status = question.status
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
        <Icon name="user" fill="rgba(0,0,0,0.6)" height="65%" width="65%" />
      )
    }
  }
  const color = 'rgba(0, 0, 0, 0.4)'

  function changeStatus(newStatus) {
    if (newStatus === 'star') {
      status = { ...status, star: !status.star }
    } else if (newStatus === 'highlight') {
      status = { ...status, highlight: !status.highlight }
    } else if (newStatus === 'archive') {
      status = { ...status, archive: !status.archive }
    }
    updateStatus(question, userData, status)
  }

  function getBackgroundColor() {
    if (status.highlight === true) {
      return '#f0f5fe'
    } else if (status.star === true) {
      return 'rgba(254,248,202,0.6)'
    } else {
      return '#fff'
    }
  }
  console.log(status)
  return (
    <StyledCard style={{ backgroundColor: getBackgroundColor() }}>
      <Header>
        <Avatar
          style={name !== 'Anonymous' ? { backgroundColor: avatar } : null}
        >
          <AvatarContent />
        </Avatar>
        <Items>
          <Author>{name}</Author>
          <Date>
            {votes}
            <Like>
              <Icon
                name="upvote"
                style={{ justifyContent: 'center', alignItem: 'center' }}
                fill={color}
                height="10px"
                width="10px"
              />
            </Like>
            <div>• {date}</div>
          </Date>
        </Items>
        <ActionItems className="hidden-icon">
          <Star onClick={() => changeStatus('star')}>
            {status.star === true ? (
              <Icon
                name="star-filled"
                fill={'#ffc107'}
                height="50%"
                width="50%"
              />
            ) : (
              <Icon name="star" fill={color} height="50%" width="50%" />
            )}
          </Star>
          <Highlight onClick={() => changeStatus('highlight')}>
            <Icon
              name="highlight"
              fill={'#4285f4'}
              height="100%"
              width="100%"
            />
          </Highlight>
          <Archive onClick={() => changeStatus('archive')}>
            <Icon name="archived" fill={color} height="100%" width="100%" />
          </Archive>
          <Options>
            <Icon
              style={{ cursor: 'pointer' }}
              name="options"
              fill={'rgba(0, 0, 0, 0.3)'}
              height="14px"
              width="14px"
            />
          </Options>
        </ActionItems>
      </Header>
      <Message>{message}</Message>
    </StyledCard>
  )
}
