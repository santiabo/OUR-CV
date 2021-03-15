import styled from "styled-components"

export const Nav = styled.nav`   
  background: #393e46;  
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: flex-end;
}

`;

export const BodyDiv = styled.div` 
  background: #393e46;
  margin-top:30px;
  width:80%;
  @media screen and (max-width: 768px) {
    margin-right:10px;
    margin-top:15px;
}
`;

export const HeaderDiv = styled.div` 
  background: #393e46;
  width:100%;
  display: flex;
`;
