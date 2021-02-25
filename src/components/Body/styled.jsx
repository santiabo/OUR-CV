import styled from "styled-components"

export const Nav = styled.div` 
  background: #0D070C;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const BodyContainer = styled.div`
display:flex;
justify-content: space-between;;
align-items: start;
z-index: 1;
width: 85%;

@media screen and (max-width: 768px) {
    width: 90%;
    flex-direction:column-reverse;
  }
`;

export const Container1 = styled.div` 
  background: #0D070C;
  ;
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
  background: 0D0100;
  width: 30%;
  display: flex;
  margin-right: 40px;
  justify-content: space-around;
  flex-direction: column;
 

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;


