import React from 'react'
import styled from 'styled-components'
import Icon from '../utilities/Icons'
import { Hover } from './Hover'

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

const TotalText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
`
const SelectorContainer = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
    }
  }
`

const Select = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(85, 85, 85);
  border: transparent;
  outline: none;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    color: rgba(0, 0, 0);
  }
`

export default function CardsHeader({
  sortCriteria,
  total,
  onOpenModalClick,
  questions,
}) {
  let sort = 'Recent'

  if (sortCriteria === 'recent') {
    sort = 'Recent'
  } else if (sortCriteria === 'popular') {
    sort = 'Popular'
  } else if (sortCriteria === 'myquestions') {
    sort = 'My questions'
  }
  function Total() {
    if (total === 0) {
      return null
    }
    if (total === 1) {
      return <TotalText>1 question</TotalText>
    } else {
      return <TotalText>{total} questions</TotalText>
    }
  }
  function ConditionalHover() {
    if (questions.length > 0) {
      return (
        <Hover
          onHover={
            <SelectorContainer onClick={onOpenModalClick}>
              <Select
                style={{ color: 'rgb(0,0,0)', transition: 'all 0.3s ease' }}
              >
                {sort}
              </Select>
              <Icon
                fill="rgb(0,0,0)"
                name="dropdown"
                width="20px"
                height="20px"
              />
            </SelectorContainer>
          }
        >
          <SelectorContainer onClick={onOpenModalClick}>
            <Select>{sort}</Select>
            <Icon
              fill="rgb(85, 85, 85)"
              name="dropdown"
              width="20px"
              height="20px"
            />
          </SelectorContainer>
        </Hover>
      )
    } else {
      return null
    }
  }

  return (
    <React.Fragment>
      <Header>
        <Total>{total} questions</Total>
        <ConditionalHover />
      </Header>
    </React.Fragment>
  )
}
