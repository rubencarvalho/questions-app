import React, { useState } from 'react'
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

const Total = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
`
const SelectorContainer = styled.div`
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

export default function CardsHeader({ total }) {
  function onClickHandler(e) {
    console.log(e)
  }

  return (
    <React.Fragment>
      <Header>
        <Total>{total} questions</Total>
        <SelectorContainer onClick={onClickHandler}>
          <Hover
            onHover={
              <SelectorContainer onClick={onClickHandler}>
                <Select>Recent Questions</Select>
                <Icon fill="blue" name="dropdown" width="20px" height="20px" />
              </SelectorContainer>
            }
          >
            <SelectorContainer onClick={onClickHandler}>
              <Select>Recent Questions</Select>
              <Icon fill="red" name="dropdown" width="20px" height="20px" />
            </SelectorContainer>
          </Hover>
        </SelectorContainer>
      </Header>
    </React.Fragment>
  )
}
