import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalWrapper, Modal1, ModalHeader, CloseButton, H2 } from '../../styles/modals';
import PassionsForm from '../PassionsForm'
import { useSelector } from 'react-redux';

const Modal = ({ isShowing, hide }) => {
   
  const language = useSelector((state) => state.language.language);

  const title = () => {
    if (language === "spanish") return "Pasiones";
    if (language === "english") return "Passions";
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
            <PassionsForm handleClose={handleClose} />
          </Modal1>
        </ModalWrapper>
      </React.Fragment>, document.body
    ) : null)
}
export default Modal;