import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalWrapper, Modal1, ModalHeader, CloseButton, H2, Button } from '../styles/modals';
import SkillsForm from '../SkillsForm'
import { useDispatch, useSelector } from 'react-redux';
import { createSkills } from '../../redux/actions/user';

const Modal = ({ isShowing, hide }) => {

  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);

  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };
  const currId = curriculums[index()].id
  const dispatch = useDispatch();
  const handleClick = (id) => {

    dispatch(createSkills(id))

  }
  const title = () => {
    if (language === "spanish") return "Habilidades";
    if (language === "english") return "Skills";
  }

  const handleClose = (e) => {
    hide();
  }

  return (

    isShowing ? ReactDOM.createPortal(
      <React.Fragment>
        <ModalOverlay />
        <ModalWrapper >
          <Modal1>
            <ModalHeader>
              <H2>{title()}</H2>
              <CloseButton onClick={hide}>
                <span aria-hidden="true">&times;</span>
              </CloseButton>
            </ModalHeader>
            <SkillsForm handleClose={handleClose} />
            <Button onClick={() => handleClick(currId)}>{language === "spanish" ? "Agregar habilidad" : "Add Skill"}</Button>
          </Modal1>
        </ModalWrapper>
      </React.Fragment>, document.body
    ) : null)
}
export default Modal;