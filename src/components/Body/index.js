import React from 'react'
import ExperienceBox from '../ExperienceBox'
import EducationBox from '../EducationBox'
import PassionsBox from '../PassionsBox'
import SkillsBox from '../SkillsBox'
import SummaryBox from '../SummaryBox'
import { Nav, Container1, Container2, BodyContainer, BodyWrapper } from './styled'

const Body = () => {
  return (
    <>

      <Nav>
        <BodyContainer>
        <BodyWrapper>
          <Container1>
            <ExperienceBox />
            <EducationBox />
          </Container1>
          <Container2>
            <SummaryBox />
            <SkillsBox />
            <PassionsBox />
          </Container2>
          </BodyWrapper>
        </BodyContainer>
      </Nav>

    </>

  )
}

export default Body