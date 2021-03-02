import React from 'react'
import { IconContext } from "react-icons";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Nav, NavLinks, LinksBox } from './styled'
import { FiMail } from 'react-icons/fi';
const Footer = () => {
  return (
    <>

      <Nav>
        <LinksBox>
          <IconContext.Provider value={{ color: "#0D070C", size: "1.3em" }}>
            <NavLinks href="mailto:santiabo@gmail.com?subject=Hello !"><FiMail /></NavLinks>
            <NavLinks href="https://api.whatsapp.com/send?phone=541166735627"><FaWhatsapp /></NavLinks>
            <NavLinks href="https://www.linkedin.com/in/santiago--aguirre/"> <FaLinkedinIn /></NavLinks>
            <NavLinks href="https://github.com/santiabo"> <FaGithub /></NavLinks>
          </IconContext.Provider>
        </LinksBox>
      </Nav>

    </>

  )
}

export default Footer