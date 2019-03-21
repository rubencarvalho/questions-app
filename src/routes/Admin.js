import styled from 'styled-components'
import React, { useState } from 'react'
import AdminSubheader from '../header/AdminSubheader'
import Icons from '../utilities/Icons'
const ContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 1140px;
`

const SectionHeader = styled.p`
  padding-top: 15px;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  transition: color 0.3s linear;
`

const SectionFooter = styled.p`
  padding-top: 15px;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  transition: color 0.3s linear;
`
const HeroSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 350px));
  grid-gap: 20px;
  width: 100%;
  justify-content: center;
`
const SectionCard = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 300;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  transition: color 0.3s linear;
  @media (min-width: 360px) {
    border-radius: 5px;
  }
`

const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.75);
`
const Description = styled.h3`
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 20px;
`

const StyledButton = styled.div`
  border: 1px solid #2182c4;
  color: #2182c4;
  font-weight: 500;
  background-color: #fff;
  height: 36px;
  padding: 0 25px;
  font-size: 14px;
  border-radius: 100px;
  display: flex;
  line-height: 36px;
  &:hover {
    user-select: none;
    cursor: pointer;
  }
`

const HelpButton = styled.div`
  border: 1px solid #2182c4;
  display: inline-block;
  justify-self: center;
  margin: 0 auto;
  color: #2182c4;
  font-weight: 500;
  background-color: #fff;
  height: 36px;
  padding: 0 25px;
  font-size: 14px;
  border-radius: 100px;
  line-height: 36px;
  &:hover {
    user-select: none;
    cursor: pointer;
  }
`

export default function Admin({ setCurrentRoute }) {
  setCurrentRoute('Admin')
  const [currentView, setCurrentView] = useState('home')
  return (
    <React.Fragment>
      <AdminSubheader
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      <SectionHeader>How would you like to use QAPP?</SectionHeader>
      <ContentContainer>
        <HeroSection>
          <SectionCard>
            <Icons
              width="50px"
              height="50px"
              fill="rgba(0,0,0,.15)"
              name="questions"
            />
            <Title>Crowdsource questions</Title>
            <Description>
              Let your audience submit their questions and up-vote the best ones
            </Description>
            <StyledButton>Go to questions</StyledButton>
          </SectionCard>
          <SectionCard>Test</SectionCard>
          <SectionCard>Test</SectionCard>
        </HeroSection>
      </ContentContainer>
      <SectionFooter>Do you have any questions?</SectionFooter>
      <HelpButton>Get in touch</HelpButton>
    </React.Fragment>
  )
}
