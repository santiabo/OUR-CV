import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, MobileIcon, Title, MyImage, TitleContainer, SubTitle } from './styled'

import ContactCard from '../ContactCard';
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <TitleContainer>
            <Title>Santiago Aguirre</Title>
            <SubTitle>Full stack developer</SubTitle>
            <ContactCard />
          </TitleContainer>
          <MyImage />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  )
};

export default Navbar;
