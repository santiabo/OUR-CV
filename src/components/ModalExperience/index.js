import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalWrapper, Modal1, ModalHeader, CloseButton, H2, Button } from '../../styles/modals'
import ExperienceForm from '../ExperienceForm'
import { useDispatch, useSelector } from 'react-redux';
import { createExperience, getUser } from '../../redux/actions/user';

const Modal = ({ isShowing, hide }) => {



  const language = useSelector((state) => state.language.language);
  const curriculums = useSelector((state) => state.user.curriculums);
  const loggedUser = useSelector((state) => state.user.loggedUser.id);

  const index = () => {
    let index = 0;
    for (var i = 0; i < curriculums.length; i++) {
      if (curriculums[i].language === language) index = i;
    }
    return index;
  };
  const currId = curriculums[index()].id


  const dispatch = useDispatch();
  useEffect(() => {
    if (loggedUser) dispatch(getUser(loggedUser))

  }, []);

  const title = () => {
    if (language === "spanish") return "Experiencia";
    if (language === "english") return "Experience";
  }



  const handleClose = (e) => {
    hide();
  }


  const handleClick = (id) => {

    dispatch(createExperience(id))

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
            <ExperienceForm handleClose={handleClose} />
            {loggedUser &&
              <Button onClick={() => handleClick(currId)}>
                {language === "spanish" ? "Agregar experiencia" : "Add experience"}
              </Button>
            }
          </Modal1>
        </ModalWrapper>
      </React.Fragment>, document.body
    ) : null)
}
export default Modal;