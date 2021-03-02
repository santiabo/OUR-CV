import React from 'react';
import { IconContext } from "react-icons";
import { FaRegHeart } from 'react-icons/fa';
import { Nav, Passions, StyledP, Icon } from './styled';
import Modal from "../ModalPassions";
import useModal from '../ModalSkills/useModal';
import { useSelector } from 'react-redux';


const PassionsBox = () => {
  
  const passions = useSelector((state) => state.user.passions);
  const { isShowing, toggle } = useModal();

  var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <>

      <Nav>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <IconContext.Provider value={{ color: '#8b4033', size: "1.1em" }}>
          <Passions> <Icon><FaRegHeart onClick={toggle} /></Icon>Passions</Passions>
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