import React from 'react'
import { Nav, H1, H2, H3, StyledBr, StyledBr2 } from './styled'


const EducationCard = ({ title, place, date }) => {
  return (
    <>

      <Nav>
        <StyledBr><br></br></StyledBr>
        <H1>{title}</H1>
        <StyledBr2><br></br></StyledBr2>
        <H2>{place}</H2>

        <H3>{date}</H3>

      </Nav>

    </>

  )
}

export default EducationCard