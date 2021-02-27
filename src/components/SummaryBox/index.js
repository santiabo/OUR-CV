import React from 'react'
import { BsLightning } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { Nav, Summary, StyledP, Icon } from './styled'
import Modal from "../ModalSummary";
import useModal from '../ModalSummary/useModal';
import { useSelector } from 'react-redux';

const SummaryBox = () => {
  
  const summary = useSelector((state) => state.user.summary.description);

  const { isShowing, toggle } = useModal();

  return (
    <>

      <Nav>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <IconContext.Provider value={{ color: "#edd588", size: "1.1em" }}>
          <Summary> <Icon><BsLightning onClick={toggle} /></Icon> Summary</Summary>
          <StyledP>
            <br></br>
            {summary}
         </StyledP>
        </IconContext.Provider>
      </Nav>

    </>

  )
}

export default SummaryBox;