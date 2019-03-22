import React, { useState } from 'react'
import styled from 'styled-components'

const Header = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  line-height: 17.5px;
  padding: 25px 16px 14px 16px;
  justify-content: space-between;
`
const ItemOptions = styled.div`
  display: flex;
  color: #555;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
`

const SubmenuItem = styled.div`
  align-items: center;
  margin-right: 12px;
  font-size: 14px;
  font-weight: 400;
  color: #555;
  line-height: 38px;
  user-select: none;
  transition: color 0.3s ease;
  &:hover {
    color: #2182c3;
    cursor: pointer;
  }
`

const StyledNav = styled.nav`
  height: 38px;
`
export default function Questions() {
  const [activeItem, setActiveItem] = useState('live')

  return (
    <Header>
      <StyledNav>
        <SubmenuItem
          className={
            activeItem === 'incoming' ? 'admin-nav__active-item' : null
          }
          onClick={() => setActiveItem('incoming')}
        >
          Incoming
        </SubmenuItem>
        <SubmenuItem
          className={activeItem === 'live' ? 'admin-nav__active-item' : null}
          onClick={() => setActiveItem('live')}
        >
          Live
        </SubmenuItem>
        <SubmenuItem
          className={activeItem === 'starred' ? 'admin-nav__active-item' : null}
          onClick={() => setActiveItem('starred')}
        >
          Starred
        </SubmenuItem>
        <SubmenuItem
          className={
            activeItem === 'archived' ? 'admin-nav__active-item' : null
          }
          onClick={() => setActiveItem('archived')}
        >
          Archived
        </SubmenuItem>
      </StyledNav>
      <ItemOptions>Archive</ItemOptions>
    </Header>
  )
}
