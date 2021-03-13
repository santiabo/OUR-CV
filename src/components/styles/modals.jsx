import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: grey;
  opacity: .5;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  opacity: 1;
`

export const Modal1 = styled.div`
  display:flex;
  flex-direction:column;
  z-index: 100;
  background:#FFF;
  opacity: 1;
  position: relative;
  margin: 1.75rem auto;
  border-color:grey;
  border-style: solid; 
  border-width: 1px;
  border-radius: 5px;
  max-width: 500px;
  min-height:400px;
  padding: 2rem;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
export const CloseButton = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 1;
  cursor: pointer;
  border: none;
  font-size:2.2rem;
  &:hover {
  color: #00adb5;
  }
 `
 export const H2 = styled.p`
 display: flex;
 font-size: 1.4rem;
 font-weight: bold;
 margin-bottom: 15px;

`;

export const Button = styled.button`
  margin-top:5px;

  
  box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:2px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#01bf71;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;

  &:hover {
    background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	background-color:#f6f6f6;
  }`
/* 
 export const ModalOverlay = styled.div`
  font-size: .9rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  padding: .3rem 1rem;
  margin-left: .5rem;
` */