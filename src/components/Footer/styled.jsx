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
justify-content: center;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
`;

export const NavLinks = styled.a`
display: flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;
margin-top: 10px;
margin-bottom: 10px;
&:hover {
  color: #01bf71;
}
`;