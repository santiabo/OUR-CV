import styled from "styled-components"

export const Nav = styled.nav` 
  background: #0D070C;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top:0;
  z-index: 10;
  widht:100%

  @media screen and (max-width:96) {
    transition: 0.8s all ease;
  }
`;

export const LinksBox= styled.div`
display:flex;
justify-content: flex-start;
flex-direction: row;
width: 100%;
margin-top:10px;
margin-left:15px;
font-family: Roboto;

@media screen and (max-width: 768px) {
  display:none;


`;

export const NavLinks = styled.a`
font-family: Roboto;
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