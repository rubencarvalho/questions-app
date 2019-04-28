import React from 'react'
import SlideCard from '../cards/SlideCard'
import RecentCard from '../cards/RecentCard'
import dayjs from 'dayjs'
import logo from '../utilities/logo.png'
import styled from 'styled-components'
const Background = styled.div`
  background-position: 50%;
  background-size: cover;
  background-image: radial-gradient(#3b5379 0, #0e1935 100%);
  height: 100%;
  width: 100%;
  position: fixed;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  color: white;
`
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: space-around;
  text-align: center;
  padding-left: 40px;
`
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  overflow: auto;
`

const Join = styled.div`
  color: white;
  text-align: center;
  font-size: 1.65em;
`

const Popular = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  color: white;
  margin-bottom: 5px;
`
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60%;
  font-size: 14px;
  text-align: center;
  color: white;
  margin-bottom: 5px;
`

export default function Slide({ questions, sortData, userData }) {
  function SortedCards() {
    if (questions.length > 0) {
      return sortData('popular')
        .filter(question => question.status.archive === false)
        .slice(0, 3)
        .map(question => (
          <SlideCard
            question={question}
            key={question._id}
            avatar={question.color}
            id={question._id}
            userData={userData}
            status={question.status}
            name={question.name}
            message={question.message}
            date={dayjs().to(question.date)}
            votes={question.votes.length}
            liked={question.votes.some(item => item.user === userData)}
            seen={question.seen}
            isnew={!question.seen.some(item => item.user === userData)}
          />
        ))
    } else {
      return null
    }
  }
  function RecentCards() {
    if (questions.length > 0) {
      return sortData('popular')
        .filter(question => question.status.archive === false)
        .slice(0, 1)
        .map(question => (
          <RecentCard
            question={question}
            key={question._id}
            avatar={question.color}
            id={question._id}
            userData={userData}
            name={question.name}
            status={question.status}
            message={question.message}
            date={dayjs().to(question.date)}
            votes={question.votes.length}
            liked={question.votes.some(item => item.user === userData)}
            seen={question.seen}
            isnew={!question.seen.some(item => item.user === userData)}
          />
        ))
    } else {
      return null
    }
  }

  return (
    <Background>
      <Container>
        <Sidebar>
          <img
            style={{ width: '160px', marginBottom: '40px' }}
            src={logo}
            alt={'logo'}
          />
          <div>
            <Join> Join at</Join>
            <Join style={{ fontWeight: '900' }}> tryqapp.com</Join>
          </div>
        </Sidebar>
        <MainSection>
          <Popular>Top Questions</Popular>
          <TopContainer>
            <SortedCards />
          </TopContainer>
          <Popular>Latest Question</Popular>
          <RecentCards />
        </MainSection>
      </Container>
    </Background>
  )
}
