import React from 'react'
import { IconContext } from "react-icons";
import { FiEdit2 } from 'react-icons/fi'
import { Nav} from './styled'
import Modal from "../ModalUser";
import useModal from '../ModalUser/useModal';


const EditButton = () => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <Nav>
        <IconContext.Provider value={{ color: "green", size: "1.5rem" }}>
          <button className="button-default" onClick={toggle}><FiEdit2 /></button>
          <Modal
            isShowing={isShowing}
            hide={toggle}
          />
        </IconContext.Provider>
      </Nav>
    </>
  )
}

export default EditButton;