import React from 'react';
import { useDispatch } from 'react-redux';
import { IconContext } from "react-icons";
import { bool } from 'prop-types';
import { StyledMenu, NavLinks } from './styled';
import { GiSaveArrow } from 'react-icons/gi';
import { BsFonts } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { print } from '../../redux/actions/print';



const Menu = ({ open }) => {

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(print())
  };

  return (
    <StyledMenu open={open}>
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
        <NavLinks >
          <GiSaveArrow onClick={handleClick} />
        </NavLinks>
        <NavLinks>
          <BsFonts />
        </NavLinks>
        <NavLinks>
          <MdLanguage />
        </NavLinks>
      </IconContext.Provider>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;