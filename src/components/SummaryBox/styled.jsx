import styled from "styled-components"

export const Nav = styled.nav` 
  background: #0D070C;
  color: white;
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
 font-size: 1.7rem;
 text-decoration: underline;
 cursor:pointer;
 margin-right:15px;
 
 &:hover {
  border-left: 1px solid black; #01bf71;
  margin-right: 3px;
  
`;