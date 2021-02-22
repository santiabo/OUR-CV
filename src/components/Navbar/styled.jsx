import styled from "styled-components"
import myImage from '../../images/myImage.jpg';


export const Nav = styled.nav` 
  background: #0D070C;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
 
  top:0;
  z-index: 10;

  @media screen and (max-width:96) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
margin-top:30px;
z-index: 1;
width: 75%;
padding: 0 24px;
max-width: 1100px;
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
height: 100%;
cursor:pointer;
margin-top: 10px;
margin-left: 5px;

&:hover {
  color: #01bf71;
}
`;

export const MyImage = styled.div`
background-image: url(${myImage});
width: 105px;
height: 105px;
border-radius: 27px;
margin-bottom: 20px;
margin-right: 100px;

`;

export const TitleContainer = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;
`;

export const Title = styled.div`
color: #EDE8EC;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size:40px;
line-height: 28px;
margin-left: 30px;

`;

export const SubTitle = styled.div`
color: #EDE8EC;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size:26px;
line-height: 28px;
margin-left: 30px;
margin-top:5px;
`;

