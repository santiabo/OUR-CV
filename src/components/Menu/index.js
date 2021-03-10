import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from "react-icons";
import { bool } from 'prop-types';
import { StyledMenu, NavLinks } from './styled';
import { GiSaveArrow } from 'react-icons/gi';
import { BsFonts } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { print } from '../../redux/actions/print';
import { changeFont } from '../../redux/actions/font';
import { changeLanguage } from '../../redux/actions/language';



const Menu = ({ open }) => {
  const language = useSelector((state) => state.language.language)
  const font = useSelector((state) => state.font.font)
  const dispatch = useDispatch();



  const fonts = [
    "GlobalStyleRoboto",
    "GlobalStyleMontserrat",
    "GlobalStyleDot",
    "GlobalStyleBitter",
    "GlobalStyleNews"
  ];

  const languages = [
    "english",
    "spanish"
  ];

  const handleFont = () => {
    const index = fonts.indexOf(font)
    let newFont = "";
    if (index < fonts.length - 1) {
      newFont = fonts[index + 1];
    } else {
      newFont = fonts[0];
    }
    dispatch(changeFont(newFont))
  };

  const handleLanguage = () => {
    const index = languages.indexOf(language)
    let newLanguage = "";
    if (index < languages.length - 1) {
      newLanguage = languages[index + 1];
    } else {
      newLanguage = languages[0];
    }
    dispatch(changeLanguage(newLanguage))
  };

  const handlePrint = () => {
    dispatch(print())
  };

  return (
    <StyledMenu open={open}>
      <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
        <NavLinks >
          <GiSaveArrow onClick={handlePrint} />
        </NavLinks>
        <NavLinks>
          <BsFonts onClick={handleFont} />
        </NavLinks>
        <NavLinks>
          <MdLanguage onClick={handleLanguage} />
        </NavLinks>
      </IconContext.Provider>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;