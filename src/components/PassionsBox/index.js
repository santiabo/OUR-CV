import React from 'react'
import { IconContext } from "react-icons";
import { FaRegHeart } from 'react-icons/fa'


import { Nav, Passions, StyledP } from './styled'



let passions = [
  {
    area: "healt",

    description: `Healthy lifestyle, individual sports and travel.`
  },
  {
    area: "healt",

    description: `Learning new tecnologies and languages.`
  },
];

const PassionsBox = () => {

  var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <>

      <Nav>
        <IconContext.Provider value={{ color: '#8b4033', size: "1.1em" }}>
          <Passions> <FaRegHeart /> Passions</Passions>
          {passions.map(i => <StyledP key={ID()}>
          <br></br>
            {i.description}
          </StyledP>)}
        </IconContext.Provider>
      </Nav>

    </>

  )
}

export default PassionsBox;