import React from 'react'
import styled from 'styled-components'
import Icon from '../utilities/Icons'

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
  max-height: 80%;
  overflow-y: auto;
  @keyframes slide {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: slide 0.2s linear;
`

const ModalTitle = styled.div`
  z-index: 10;
  font-size: 14px;
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.4);
  padding: 17.5px 20px;
  padding-bottom: 12.25px;
`

const ModalCriteria = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  padding: 16px 20px 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (hover: hover) {
    &:hover {
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }
`

const Backdrop = styled.div`
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease-in-out;
  @keyframes modalBackdrop {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  animation: modalBackdrop 0.2s ease-in-out;
`

export default function Sort({ activeCriteria, onSortClick, closeModal }) {
  return (
    <Backdrop onClick={closeModal}>
      <ModalSort>
        <ModalTitle onClick={e => e.stopPropagation()}>
          Sort questions
        </ModalTitle>
        <ModalCriteria
          style={activeCriteria === 'popular' ? { fontWeight: 700 } : null}
          onClick={() => onSortClick('popular')}
        >
          <div>Popular questions</div>
          <Icon
            name="check"
            fill="rgba(0, 0, 0, 0.4)"
            height="18px"
            width="18px"
            style={activeCriteria === 'popular' ? null : { display: 'none' }}
          />
        </ModalCriteria>
        <ModalCriteria
          style={activeCriteria === 'recent' ? { fontWeight: 700 } : null}
          onClick={() => onSortClick('recent')}
        >
          <div>Recent questions</div>
          <Icon
            name="check"
            fill="rgba(0, 0, 0, 0.4)"
            height="18px"
            width="18px"
            style={activeCriteria === 'recent' ? null : { display: 'none' }}
          />
        </ModalCriteria>
        <ModalCriteria
          style={activeCriteria === 'myquestions' ? { fontWeight: 700 } : null}
          onClick={() => onSortClick('myquestions')}
        >
          <div>My questions</div>
          <Icon
            name="check"
            fill="rgba(0, 0, 0, 0.4)"
            height="18px"
            width="18px"
            style={
              activeCriteria === 'myquestions' ? null : { display: 'none' }
            }
          />
        </ModalCriteria>
      </ModalSort>
    </Backdrop>
  )
}
