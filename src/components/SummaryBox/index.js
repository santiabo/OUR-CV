import React from 'react'
import { BsLightning } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { Nav, Summary, StyledP, Icon } from './styled'
import Modal from "../ModalSummary";
import useModal from '../ModalSummary/useModal';
import { useSelector } from 'react-redux';

const SummaryBox = () => {

  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);

  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };
  
  const summary = useSelector((state) => state.user.curriculums[index()].summary.description);

  const title = () => {
    if (language === "spanish") return "Resumen";
    if (language === "english") return "Summary";
  }

  const { isShowing, toggle } = useModal();

  return (
    <>

      <Nav>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        <IconContext.Provider value={{ color: "#edd588", size: "1.1em" }}>
          <Summary> <Icon><BsLightning onClick={toggle} /></Icon>{title()}</Summary>
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