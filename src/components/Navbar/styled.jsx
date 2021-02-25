import styled from "styled-components"
import myImage from '../../images/avatar.png';


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
${'' /* padding: 0 24px; */}

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
color: #black;
display: flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;

cursor:pointer;


&:hover {
  color: #01bf71;
}
`;

export const MyImage = styled.div`
background-image: url(${myImage});
width: 150px;
height: 150px;
border-radius: 15px;
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
  }
`;

export const Title = styled.div`
color: #EDE8EC;
font-size:42px;
margin-left: 30px;
cursor: pointer;

@media screen and (max-width: 768px) {
  font-size:38px;
    }
`;

export const SubTitle = styled.div`
color: #EDE8EC;
font-size:26px;
margin-left: 30px;
margin-top:15px;

@media screen and (max-width: 768px) {
  font-size:22px;
  
  }
`;

