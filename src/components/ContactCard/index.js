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
      <Nav> <IconContext.Provider value={{ color: "#0D070C", size: "1.1em" }}>
        <LinksBox>
          <NavLinks href="mailto:santiabo@gmail.com?subject=Hello !"><FiMail /> &nbsp; {email}</NavLinks>
          <NavLinks href="https://api.whatsapp.com/send?phone=541166735627"><FaWhatsapp /> &nbsp; {mobile}</NavLinks>
          <NavLinks href=""><MdPlace /> &nbsp; {city} </NavLinks>
        </LinksBox>
      </IconContext.Provider>
      </Nav>
    </>
  )
};

export default ContactCard;