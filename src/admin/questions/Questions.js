import React, { useState } from 'react'
import styled from 'styled-components'
import Submenu from './Submenu'
import Icon from '../../utilities/Icons'
import { Hover } from '../../cards/Hover'
import Incoming from './Incoming'
import Live from './Live'
import Starred from './Starred'
import Archived from './Archived'

const ItemOptions = styled.div`
  display: flex;
  color: #555;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
`
const Header = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 650px;
  line-height: 17.5px;
  padding: 25px 16px 0 16px;
  justify-content: space-between;
  align-items: center;
`
const Container = styled.section`
  margin: 0 auto;
  max-width: 650px;
  color: #555;
  display: flex;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  height: calc(100vh - 215px);
  overflow: scroll;
  align-items: center;
  justify-content: center;
`

export default function Questions({ questions }) {
  const [activeItem, setActiveItem] = useState('incoming')
  const [activeIncoming, setActiveIncoming] = useState(true)

  function ConditionalContainer() {
    if (activeItem === 'incoming') {
      return (
        <Incoming
          setActiveIncoming={setActiveIncoming}
          activeIncoming={activeIncoming}
        />
      )
    } else if (activeItem === 'live') {
      return <Live questions={questions} />
    } else if (activeItem === 'starred') {
      return <Starred questions={questions} />
    } else if (activeItem === 'archived') {
      return <Archived questions={questions} />
    } else {
      return null
    }
  }
  return (
    <React.Fragment>
      <Header>
        <Submenu activeItem={activeItem} setActiveItem={setActiveItem} />
        <ItemOptions>
          <Hover
            onHover={
              <Icon
                style={{ cursor: 'pointer' }}
                name="options"
                width="22px"
                height="14px"
                fill="#666"
              />
            }
          >
            <Icon
              style={{ cursor: 'pointer' }}
              name="options"
              width="22px"
              height="14px"
              fill="#c4c4c4"
            />
          </Hover>
        </ItemOptions>
      </Header>
      <Container>
        <ConditionalContainer />
      </Container>
    </React.Fragment>
  )
}
