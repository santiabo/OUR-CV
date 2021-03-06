import React from 'react';
import { useSelector } from 'react-redux';
import { Nav, NavbarContainer, Title, MyImage, TitleContainer, SubTitle, BorderDiv } from './styled';
import ContactCard from '../ContactCard';
import ModalUser from "../ModalUser";
import ModalAvatar from "../ModalAvatar";
import useModalU from '../ModalUser/useModal';
import useModalA from '../ModalAvatar/useModal';


const Navbar = () => {

  const name = useSelector((state) => state.user.name);
  const title = useSelector((state) => state.user.title);
  const image = useSelector((state) => state.user.avatar);

  const { isShowing, toggle } = useModalU();

  const { isShowing1, toggle1 } = useModalA();



  return (
    <>
      <Nav>
        <BorderDiv>
          <NavbarContainer>
            <MyImage src={image} alt="Profile Pic" onClick={toggle1} />
            <TitleContainer>
              <Title onClick={toggle} >{name}</Title>
              <SubTitle>{title}</SubTitle>
              <ContactCard />
            </TitleContainer>

            <ModalUser
              isShowing={isShowing}
              hide={toggle}
            />
            <ModalAvatar
              isShowing={isShowing1}
              hide={toggle1}
            />
          </NavbarContainer>
        </BorderDiv>
      </Nav>
    </>
  )
};

export default Navbar;
