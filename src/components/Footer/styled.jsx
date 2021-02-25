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
  justify-content: center;
 
  font-size: 1rem;
  top:0;
  z-index: 10;
  
`;

export const LinksBox= styled.div`
display:flex;
width: 100%;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;



`;

export const NavLinks = styled.a`
color: #black;
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