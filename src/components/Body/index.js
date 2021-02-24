import React from 'react'
import ExperienceBox from '../ExperienceBox'
import EducationBox from '../EducationBox'
import PassionsBox from '../PassionsBox'
import SkillsBox from '../SkillsBox'
import SummaryBox from '../SummaryBox'
import { Nav, Container1, Container2, BodyContainer } from './styled'

const Body = () => {
  return (
    <>

      <Nav>
        <BodyContainer>
          <Container1>
            <ExperienceBox />
            <EducationBox />
          </Container1>
          <Container2>
            <SummaryBox />
            <SkillsBox />
            <PassionsBox />
          </Container2>
        </BodyContainer>
      </Nav>

    </>

  )
}

export default Body