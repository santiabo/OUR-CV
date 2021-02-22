import React from 'react'
import { Nav, Summary, StyledP } from './styled'
import {BsLightning} from 'react-icons/bs'
import { IconContext } from 'react-icons'

const SummaryBox = () => {
  return (
    <>

      <Nav>
      <IconContext.Provider value={{ color: "#edd588", size: "1.1em" }}>
        <Summary>  <BsLightning /> Summary</Summary>
        <StyledP>
        <br></br>
         Full stack developer, proactive,
         fast learner with an advanced English level.
         </StyledP>
        </IconContext.Provider>
      </Nav>

    </>

  )
}

export default SummaryBox;