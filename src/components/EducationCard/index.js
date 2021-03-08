import React from 'react'
import { Nav, H1, H2, H3, Div } from './styled'


const EducationCard = ({ title, place, date }) => {
  return (
    <>

      <Nav>

        <H1>{title}</H1>
        <Div>
          <H2>{place}</H2>
          <H3>{date}</H3>
        </Div>
      </Nav>

    </>

  )
}

export default EducationCard