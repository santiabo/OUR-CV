import styled from "styled-components"

export const Nav = styled.div` 
  background: #393e46;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const BodyContainer = styled.div`
flex-direction:column;
background: #eeeeee;
display:flex;
align-items: center;
z-index: 1;
width: 100%;
`;

export const BodyWrapper = styled.div` 
background: #eeeeee;
display:flex;
margin-top:30px;
justify-content: space-around;;
align-items: start;
width: 85%;
margin-bottom:65px;

@media screen and (max-width: 768px) {
    width: 90%;
    flex-direction:column-reverse;
  }
`;

export const Container1 = styled.div` 
  background: #eeeeee;
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Container2 = styled.div` 
  background: #eeeeee;
  width: 30%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
 

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;


