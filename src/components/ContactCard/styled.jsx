import styled from "styled-components"

export const TooltipText = styled.a`
color: #0D070C;
display: flex;
text-decoration: none;
height: 100%;
cursor:pointer;
margin-top: 10px;
margin-right:20px;

&:hover {
  color: #01bf71;
}

@media screen and (max-width: 768px) {
  display:none;
}
`;

export const TooltipBox = styled.div`
   visibility: hidden;
   color: transparent;

   position: absolute;
   right: calc(100% + 200px); ${'' /* change postion of the tooltip */}
   bottom: 30px;
  
   background-color: rgba(0, 0, 0, 0.8);
   width: 150px;
   padding: 5px 5px;
   border-radius: 4px;
   transition: visibility 0.1s, color 0.5s, background-color 0.1s, width 0.2s, padding 0.2s ease-in-out;
`;


export const Nav = styled.nav` 
  background-color:#EEEEEE;
  display: flex;
`;

export const LinksBox= styled.div`
display:flex;
justify-content: space-around;
flex-direction: row;
margin-top:10px;

position: relative;

& ${TooltipText}:hover + ${TooltipBox} {
      visibility: visible;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.8);
      width: 230px;
      padding: 8px 8px;
      border-radius: 4px;
`;






