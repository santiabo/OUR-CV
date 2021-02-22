import React from 'react'
import { Nav, H1, StyledP, StyledBr, StyledBr2} from './styled'


const EskillCard = ({ skillArea, skillTool }) => {
  return (
    <>

      <Nav>
        <StyledBr><br></br></StyledBr>
        <H1>{skillArea}</H1>  
        <StyledBr2><br></br></StyledBr2>
        <StyledP>{skillTool}</StyledP>

      </Nav>

    </>

  )
}

export default EskillCard;