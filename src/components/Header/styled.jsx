import styled from "styled-components"


export const Nav = styled.nav` 
  width: 100%;
  height: 50px;
  display:flex;

  @media screen and (max-width: 768px) {
    justify-content: center;
  
`;

export const LinksBox= styled.div`
border-radius: 2px;
background: #222831;
display:flex;
width: 100%;
flex-direction: row-reverse;
flex-wrap: wrap;

`;

export const NavLinks = styled.a`
color: black;
display: flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;
cursor:pointer;
margin-top: 10px;
margin-left: 5px;

&:hover {
  /*border-bottom: 1px solid black; #01bf71;*/
  color: #01bf71;
}
`;