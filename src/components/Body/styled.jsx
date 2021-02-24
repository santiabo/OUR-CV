import styled from "styled-components"

export const Nav = styled.div` 
  background: #0D070C;
  display: flex;
  justify-content: center;
  align-items: center;


  @media screen and (max-width:96) {
    transition: 0.8s all ease;
  }
`;

export const BodyContainer = styled.div`
display:flex;
justify-content: space-between;;
align-items: start;
margin-top:30px;
z-index: 1;
width: 75%;
${'' /* padding: 0 24px; */}

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
    display:none;
  }
`;


