import React from 'react'
import { Nav, H1, H2, H3, StyledP, Div } from './styled'


const ExperienceCard = ({ position, place, date, info }) => {
  return (
    <>

      <Nav>
        <H3><br></br></H3>
        <H1>{position}</H1>

        <Div>
          <H2>{place}</H2>
          <H3>{date}</H3>
        </Div>
        <H3><br></br></H3>
        <StyledP>{info}</StyledP>

      </Nav>

    </>

  )
}

export default ExperienceCard