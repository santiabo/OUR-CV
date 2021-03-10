import styled from "styled-components"


export const Nav = styled.nav` 
  width: 100%;
  height: 50px;
  display:flex; 
  border-bottom: 1px solid #0e111c;
`;

export const LinksBox= styled.div`
background: #222831;
display:flex;
width: 100%;

flex-direction: row-reverse;
flex-wrap: wrap;
`;

export const LinksBox2= styled.div`
background: #222831;
display:flex;
width: 65px;
flex-direction: row;
flex-wrap: wrap;
`;

export const NavLinks = styled.a`
color: black;
display: flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;
cursor:pointer;
margin-left: 5px;
&:hover {
 background: #00adb5;

}
`;

export const BurgerDiv= styled.div`
display:flex;
align-items:center;
justify-content: center;
background: #222831;
display:flex;
cursor:pointer;
width:50px;

&:focus {
    outline: none;
  }

&:hover {
 background: #00adb5;
}
`;

export const GoogleDiv= styled.div`
display:flex;
align-items:center;
justify-content: center;
width:50px;

background: #222831;
display:flex;
cursor:pointer;

&:focus {
    outline: none;
  }

&:hover {
 background: #00adb5;
}
`;

export const GoogleDiv2= styled.div`
display:flex;
align-items:center;
justify-content: center;
width:50px;

background: black;
display:flex;
cursor:pointer;

&:focus {
    outline: none;
  }

&:hover {
 background: darkred;
}
`;