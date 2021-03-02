import styled from "styled-components"

export const Nav = styled.nav` 
  background: #393e46;
  display: flex;
`;

export const BorderDiv = styled.div` 
  background-color:#EEEEEE;
  display: flex;
  width: 100%;
  flex-direction:column;
  align-items: center;
`;

export const NavbarContainer = styled.div`
background-color:#EEEEEE;
display:flex;
flex-direcion: row;
justify-content: space-around;
align-items: start;
width: 85%;
margin-top:64px;

@media screen and (max-width: 768px) {
flex-direction: column;
  }

`;

export const MyImage = styled.img`
width: 150px;
height: 150px;
min-width:150px;
cursor: pointer;
border: 2px solid black;
border-radius: 100px;
margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
background-color:#EEEEEE;
display:flex;
justify-content: flex-end;
flex-direction: column;
margin-left: 40px;
width:70%;

@media screen and (max-width: 768px) {
  width:50%;
  margin-bottom: 20px;
  align-itmes: top;
  justify-content: flex-start;
  text-align: center;
  }
`;

export const Title = styled.div`
color: #eeeee;


font-size:42px;
cursor: pointer;

@media screen and (max-width: 768px) {
  font-size:38px;
  margin-left: 0px;
  align-items: center;
    }
`;

export const SubTitle = styled.div`
background-color:#EEEEEE;
width:100%;
font-size:26px;
margin-top:15px;

@media screen and (max-width: 768px) {
  font-size:22px;
  margin-left: 0px;
  
  }
`;

