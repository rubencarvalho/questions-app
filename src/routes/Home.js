import dayjs from 'dayjs'
import React, { useState } from 'react'
import Card from '../cards/Card'
import CardsHeader from '../cards/CardsHeader'
import Form from '../form/Form'
import Sort from '../sort/Sort'

export default function Home({
  userData,
  addQuestion,
  questions,
  sortCriteria,
  sortData,
  onSortClick,
  upvote,
  changeNew,
  setCurrentRoute,
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

  return (
    <React.Fragment>
      <Form submitForm={addQuestion} />
      <CardsHeader
        questions={questions}
        onOpenModalClick={onOpenModalClick}
        sortCriteria={sortCriteria}
        total={sortData(sortCriteria).length}
      />

      <SortedCards />
      <Modal />
    </React.Fragment>
  )
}
