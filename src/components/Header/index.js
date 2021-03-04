import React from 'react'
import { bool, func } from 'prop-types';
import { IconContext } from "react-icons";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Nav, NavLinks, LinksBox, LinksBox2, BurgerDiv } from './styled'
import { FiMail } from 'react-icons/fi';
import { CgMenu } from 'react-icons/cg';

const Header = ({ open, setOpen }) => {
  return (
    <>
      <Nav>

        <LinksBox2>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <BurgerDiv>
              <CgMenu open={open} onClick={() => setOpen(!open)} />
            </BurgerDiv>
          </IconContext.Provider>
        </LinksBox2>
        <LinksBox>
          <IconContext.Provider value={{ color: "white", size: "1.1em" }}>
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
Header.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Header;