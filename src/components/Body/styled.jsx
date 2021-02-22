import styled from "styled-components"

export const Nav = styled.div` 
  background: #0D070C;
  font-family: Roboto;
  display:flex;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width:96) {
    transition: 0.8s all ease;
  }
`;

export const Container1 = styled.div` 
  background: #0D070C;
  font-family: Roboto;
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;



export const Container2 = styled.div` 
  background: 0D0100;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start; 
  font-size: 1rem;
  flex-direction: column;
 

  @media screen and (max-width: 768px) {
    display:none;
  }
`;


