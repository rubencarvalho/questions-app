import React from 'react'
import styled from 'styled-components'

const ModalSort = styled.section`
  display: grid;
  grid-auto-rows: auto;
  background: white;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  position: fixed;
  width: 100%;
  top: auto !important;
  left: 0 !important;
  bottom: 0;
  transform: translateY(0);
  max-height: 80%;
  overflow-y: auto;
`

const ModalTitle = styled.div`
  font-size: 14px;
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.4);
  padding: 17.5px 20px;
  padding-bottom: 12.25px;
`

const ModalCriteria = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  padding: 16px 20px 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4) !important;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`

export default function Sort({ activeCriteria, onSortClick }) {
  return (
    <Backdrop>
      <ModalSort>
        <ModalTitle>Sort questions</ModalTitle>
        <ModalCriteria>Popular questions</ModalCriteria>
        <ModalCriteria>Recent questions</ModalCriteria>
        <ModalCriteria>My questions</ModalCriteria>
      </ModalSort>
    </Backdrop>
  )
}
