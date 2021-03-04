import styled from "styled-components"


export const Nav = styled.nav` 
  background: #393e46;
  color: #0D070C;
  width: 100%;
  min-height: 2.8em; 
  display:flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  height: 100px;

`;

export const LinksBox = styled.div`
background: #00adb5;
display:flex;

width: 100%;

flex-direction: row;
justify-content: center;
align-items: flex-start;
`;


export const NavLinks = styled.a`
display: flex;
height: 50px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
text-decoration: none;
padding: 0 1rem;
cursor:pointer;
&:hover {
  background: #393e46;
}
`;


