import styled from "styled-components"


export const Nav = styled.nav` 
  ; 
  background: #0D070C;
  color: white;
  width: 100%;
  min-height: 2.8em; 
  display:flex;
  
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
 
  font-size: 1rem;
  top:0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    justify-content: center;
  
`;

export const LinksBox= styled.div`
display:flex;
width: 90%;
justify-content: end;
flex-direction: row-reverse;
flex-wrap: wrap;



`;

export const NavLinks = styled.a`
color: black;
display: flex;
align-items:center;
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