import dayjs from 'dayjs'
import React, { useState } from 'react'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../form/Form'
import Sort from '../sort/Sort'
import styled from 'styled-components'
import Icon from '../utilities/Icons'
const EmptyContainer = styled.section`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`
const EmptySubtitle = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 6px;
  margin-top: 0;
`
const EmptyTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: #5e5e5e;
`

export default function Home({
  userData,
  addQuestion,
  questions,
  sortCriteria,
  sortData,
  upvote,
  changeNew,
  setCurrentRoute,
  setSortCriteria,
}) {
  const [openModal, setOpenModal] = useState(false)
  function closeModal() {
    setOpenModal(false)
  }
  function onOpenModalClick() {
    setOpenModal(!openModal)
  }
  setCurrentRoute('Questions')
  function SortedCards() {
    if (questions.length > 0) {
      return sortData(sortCriteria).map(question => (
        <Card
          key={question._id}
          avatar={question.color}
          id={question._id}
          name={question.name}
          message={question.message}
          date={dayjs().to(question.date)}
          votes={question.votes.length}
          liked={question.votes.some(item => item.user === userData)}
          onClick={upvote}
          isnew={!question.seen.some(item => item.user === userData)}
          changeNew={changeNew}
        />
      ))
    } else {
      return null
    }
  }

  function onSortClick(newSortCriteria) {
    setOpenModal(false)
    setSortCriteria(newSortCriteria)
  }
  function Modal() {
    if (openModal) {
      return (
        <Sort
          activeCriteria={sortCriteria}
          closeModal={closeModal}
          onSortClick={onSortClick}
        />
      )
    } else {
      return null
    }
  }

  function EmptyState() {
    if (questions.length === 0) {
      return (
        <EmptyContainer>
          <Icon
            style={{ marginBottom: '32px', marginTop: '32px' }}
            height="90px"
            width="90px"
            name="emptyhome"
          />
          <EmptySubtitle>There are no questions asked yet.</EmptySubtitle>
          <EmptyTitle>Ask the first one!</EmptyTitle>
        </EmptyContainer>
      )
    } else {
      return null
    }
  }

  return (
    <React.Fragment>
      <Form submitForm={addQuestion} />
      <CardsHeader
        questions={questions}
        onOpenModalClick={onOpenModalClick}
        sortCriteria={sortCriteria}
        total={sortData(sortCriteria).length}
      />
      <EmptyState />
      <SortedCards />
      <Modal />
    </React.Fragment>
  )
}
