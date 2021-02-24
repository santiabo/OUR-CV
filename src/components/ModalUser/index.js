import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalWrapper, Modal1, ModalHeader, CloseButton } from './styled'
import  UserForm from '../UserForm'

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalOverlay />
    <ModalWrapper >
      <Modal1>
        <ModalHeader>
          <CloseButton onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </CloseButton>
        </ModalHeader>
        <UserForm />
      </Modal1>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;

export default Modal;