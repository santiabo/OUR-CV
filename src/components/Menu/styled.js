// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: start;
  align-items:end;
  background: #222831;
  border-bottom-right-radius: 5px; 
  border-top-right-radius: 5px; 
  height: 300px;
  text-align: left;
  position: fixed;
  max-width: 70px;
  top:50px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const NavLinks = styled.a`
color: black;
display: flex;
margin-top:50px;
height:40px;
min-width:30px;
align-items:center;
text-decoration: none;
padding: 0 1rem;
cursor:pointer;

&:hover {
 background: #00adb5;

}
`;