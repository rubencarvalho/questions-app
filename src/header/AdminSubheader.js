import React from 'react'
import styled from 'styled-components'
import './header.css'
const Menu = styled.section`
  width: 100%;
  margin: 0 auto;
  position: relative;
  height: 48px;
  color: rgba(0, 0, 0, 0.75);
  font-size: 14px;
  font-weight: 400;
  background-color: #fff;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  height: 100%;
`

const MenuItem = styled.div`
  display: flex;
  padding: 0 20px 0 20px;
  align-items: center;
  line-height: 48px;
  height: 100%;
  user-select: none;
  transition: color 0.3s ease;
  &:hover {
    color: #2182c3;
    cursor: pointer;
  }
`

export default function AdminSubheader({ currentView, setCurrentView }) {
  return (
    <Menu>
      <Container>
        <MenuItem
          className={currentView === 'home' ? 'active-item' : null}
          onClick={() => setCurrentView('home')}
        >
          Home
        </MenuItem>
        <MenuItem
          className={currentView === 'questions' ? 'active-item' : null}
          onClick={() => setCurrentView('questions')}
        >
          Questions
        </MenuItem>
        <MenuItem
          className={currentView === 'polls' ? 'active-item' : null}
          onClick={() => setCurrentView('polls')}
        >
          Polls
        </MenuItem>
        <MenuItem
          className={currentView === 'analytics' ? 'active-item' : null}
          onClick={() => setCurrentView('analytics')}
        >
          Analytics
        </MenuItem>
      </Container>
    </Menu>
  )
}
