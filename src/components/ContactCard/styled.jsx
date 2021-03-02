import styled from "styled-components"

export const Nav = styled.nav` 
  background-color:#EEEEEE;
  display: flex;
`;

export const LinksBox= styled.div`
display:flex;
justify-content: space-around;
flex-direction: row;
margin-top:10px;
`;

export const NavLinks = styled.a`
color: #0D070C;
display: flex;
text-decoration: none;
height: 100%;
cursor:pointer;
margin-top: 10px;
margin-right:20px;

&:hover {
  color: #01bf71;
}

@media screen and (max-width: 768px) {
  display:none;
}
`;

