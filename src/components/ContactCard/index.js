import React from 'react';
import { useSelector } from 'react-redux';
import { IconContext } from "react-icons";
import { FaWhatsapp } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { Nav, NavLinks, LinksBox } from './styled';
import { FiMail } from 'react-icons/fi';


const ContactCard = () => {

  const email = useSelector((state) => state.user.email);
  const mobile = useSelector((state) => state.user.mobile);
  const city = useSelector((state) => state.user.city);
 
  
  return (
    <>
      <Nav>
        <LinksBox>
          <IconContext.Provider value={{ color: "white", size: "1.1em" }}>
            <NavLinks to="about"><FiMail /> &nbsp; {email}</NavLinks>
            <NavLinks to="about"><FaWhatsapp /> &nbsp; {mobile}</NavLinks>
            <NavLinks href=""><MdPlace /> &nbsp; {city} </NavLinks>
          </IconContext.Provider>
        </LinksBox>
      </Nav>
    </>
  )
};

export default ContactCard;