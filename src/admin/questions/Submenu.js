import styled from 'styled-components'
import React from 'react'

const SubmenuItem = styled.span`
  align-items: center;
  font-size: 14px;
  margin-right: 2px;
  font-weight: 400;
  color: #555;
  line-height: 38px;
  user-select: none;
  transition: color 0.3s ease;
  padding-bottom: 8px;
  padding-right: 5px;
  padding-left: 5px;
  &:hover {
    color: #2182c3;
    cursor: pointer;
  }
`

export default function Submenu({ activeItem, setActiveItem }) {
  return (
    <nav>
      <SubmenuItem
        className={activeItem === 'incoming' ? 'admin-nav__active-item' : null}
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
        className={activeItem === 'archived' ? 'admin-nav__active-item' : null}
        onClick={() => setActiveItem('archived')}
      >
        Archived
      </SubmenuItem>
    </nav>
  )
}
