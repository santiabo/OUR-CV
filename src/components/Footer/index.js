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
          <IconContext.Provider value={{ color: "white", size: "1.1em" }}>
            <NavLinks to="about"><FiMail /></NavLinks>
            <NavLinks to="about"><FaWhatsapp /></NavLinks>
            <NavLinks href="https://www.linkedin.com/in/santiago--aguirre/"> <FaLinkedinIn /></NavLinks>
            <NavLinks href="https://github.com/santiabo"> <FaGithub /></NavLinks>
          </IconContext.Provider>
        </LinksBox>
      </Nav>

    </>

  )
}

export default Footer