import styled from "styled-components"

export const Nav = styled.nav` 
  background: #0D070C;
  display: flex;
  align-items: center;
  z-index: 10;
  widht:80%;
`;

export const LinksBox= styled.div`
display:flex;
justify-content: space-between;
flex-direction: collumn;
width: 75%;
margin-top:10px;
margin-left:15px;
;

@media screen and (max-width: 768px) {
  display:none;
`;

export const NavLinks = styled.a`
;
color: white;
display: flex;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;
margin-top: 10px;
margin-left: 5px;

&:hover {
  /*border-bottom: 1px solid black; #01bf71;*/
  color: #01bf71;
}
`;