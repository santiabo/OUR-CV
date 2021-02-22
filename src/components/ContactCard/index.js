import React from 'react';
import { IconContext } from "react-icons";
import { FaWhatsapp } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { Nav, NavLinks, LinksBox } from './styled';
import { FiMail } from 'react-icons/fi';


const ContactCard = () => {
  return (
    <>
      <Nav>
        <LinksBox>
          <IconContext.Provider value={{ color: "white", size: "1.1em" }}>
            <NavLinks to="about"><FiMail /> &nbsp; santiabo@gmail.com</NavLinks>
            <NavLinks to="about"><FaWhatsapp /> &nbsp; +54 11 66735627</NavLinks>
            <NavLinks href=""><MdPlace /> &nbsp; Córdoba, Argentina </NavLinks>
          </IconContext.Provider>
        </LinksBox>
      </Nav>
    </>
  )
};

export default ContactCard;