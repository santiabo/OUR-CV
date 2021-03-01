import styled from "styled-components"

export const Nav = styled.nav` 
  background: #0D070C;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

export const NavbarContainer = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
margin-top:30px;
z-index: 1;
width: 85%;

@media screen and (max-width: 768px) {
flex-direction: column;
  }

`;

export const MobileIcon = styled.div`
 display:none;

 @media screen and (max-width: 768px) {
   display:block;
   positin:absolute;
   top: 0;
   right: 0;
   transform: translate(-100, 60%);
   font-size: 1.8rem;
   cursor:pointer;
   color: white;
 }
`;

export const NavLinks = styled.a`
color: black;
display: flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;

cursor:pointer;


&:hover {
  color: #01bf71;
}
`;

export const MyImage = styled.img`
width: 150px;
height: 150px;
cursor: pointer;
border-color: black;
border-radius: 100px;
margin-bottom: 20px;


`;

export const TitleContainer = styled.div`
display:flex;
justify-content: flex-end;
flex-direction: column;
width:80%;

@media screen and (max-width: 768px) {
  width:50%;
  margin-bottom: 20px;
  align-itmes: top;
  justify-content: flex-start;
  text-align: center;
  }
`;

export const Title = styled.div`
color: #EDE8EC;
font-size:42px;
margin-left: 30px;
cursor: pointer;

@media screen and (max-width: 768px) {
  font-size:38px;
  margin-left: 0px;
  align-items: center;
    }
`;

export const SubTitle = styled.div`
color: #EDE8EC;
font-size:26px;
margin-left: 30px;
margin-top:15px;

@media screen and (max-width: 768px) {
  font-size:22px;
  margin-left: 0px;
  
  }
`;

