import React from 'react'
import styled from 'styled-components'
import Icons from '../utilities/Icons'
const ContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  padding-bottom: 40px;
`

const SectionHeader = styled.p`
  padding-top: 15px;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  transition: color 0.3s linear;
`

const HeroSection = styled.section`
  display: grid;
  @media (min-width: 1140px) {
    grid-template-columns: repeat(auto-fill, minmax(auto, 366px));
  }
  grid-gap: 20px;
  width: 100%;
  justify-content: center;
`
const SectionCard = styled.div`
  padding: 40px;
  max-width: 415px;
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
  @media (min-width: 415px) {
    border-radius: 5px;
  }
`

const Title = styled.h2`
  padding-top: 20px;
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

const SectionFooter = styled.p`
  padding-top: 30px;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  transition: color 0.3s linear;
`

const HelpButton = styled.div`
  font-weight: 500;
  background-color: #fff;
  height: 36px;
  padding: 0 25px;
  font-size: 14px;
  border-radius: 100px;
  line-height: 36px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  &:hover {
    user-select: none;
    cursor: pointer;
  }
`
export default function Dashboard({ setCurrentView }) {
  return (
    <React.Fragment>
      <SectionHeader>How would you like to use Qapp?</SectionHeader>
      <ContentContainer>
        <HeroSection>
          <SectionCard>
            <Icons
              width="50px"
              height="50px"
              fill="rgba(0,0,0,.15)"
              name="questions"
            />
            <Title style={{ paddingTop: '30px' }}>Crowdsource questions</Title>
            <Description>
              Let your audience submit their questions and up-vote the best ones
            </Description>
            <StyledButton onClick={() => setCurrentView('questions')}>
              Go to questions
            </StyledButton>
          </SectionCard>
          <SectionCard>
            <Icons
              width="60px"
              height="60px"
              fill="rgba(0,0,0,.15)"
              name="polls"
            />
            <Title>Run live polls</Title>
            <Description>
              Create simple multiple-choice poll, survey or stunning word clouds
            </Description>
            <StyledButton
              onClick={() => setCurrentView('polls')}
              style={{ border: '1px solid #70be4e', color: '#70be4e' }}
            >
              Go to polls
            </StyledButton>
          </SectionCard>
          <SectionCard>
            <Icons
              width="60px"
              height="60px"
              fill="rgba(0,0,0,.15)"
              name="analytics"
            />
            <Title>Get insights</Title>
            <Description>
              Discover how your audience uses Qapp to make your events more
              interactive
            </Description>
            <StyledButton
              onClick={() => setCurrentView('analytics')}
              style={{
                border: '1px solid rgba(0, 0, 0, 0.2)',
                color: 'rgba(0,0,0,.75)',
              }}
            >
              Go to analytics
            </StyledButton>
          </SectionCard>
        </HeroSection>
        <SectionFooter>Do you have any questions?</SectionFooter>

        <HelpButton>
          <a
            style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.75)' }}
            href="mailto:hi@ruben.one"
          >
            Get in touch
          </a>
        </HelpButton>
      </ContentContainer>
    </React.Fragment>
  )
}
