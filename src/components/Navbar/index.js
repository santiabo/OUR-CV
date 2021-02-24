import React from 'react';
import { useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, MobileIcon, Title, MyImage, TitleContainer, SubTitle } from './styled';
import ContactCard from '../ContactCard';
import Modal from "../ModalUser";
import useModal from '../ModalUser/useModal';


const Navbar = () => {

  const name = useSelector((state) => state.user.name);
  const title = useSelector((state) => state.user.title);
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Nav>
        <NavbarContainer>
          <MyImage />
          <TitleContainer>
            <Title onClick={toggle} >{name}</Title>
            <SubTitle>{title}</SubTitle>
            <ContactCard />
          </TitleContainer>

          <Modal
            isShowing={isShowing}
            hide={toggle}
          />
        </NavbarContainer>
      </Nav>
    </>
  )
};

export default Navbar;
