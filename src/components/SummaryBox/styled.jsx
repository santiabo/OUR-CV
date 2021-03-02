import styled from "styled-components"

export const Nav = styled.nav` 
  background: #EEEEEE;
  color: #0D070C;
  display:flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin-bottom:20px;
  border-radius:5px;
`;

export const Summary = styled.h2`
 display:flex;
 font-size: 1.5rem;
 text-decoration: underline;
`;

export const StyledP = styled.p`
 font-size: 1rem;
`;

export const Icon = styled.p`
 font-size:  1.9rem;
 text-decoration: underline;
 cursor:pointer;
 margin-right:15px;
 
 &:hover {

  margin-right: 3px;
  
`;