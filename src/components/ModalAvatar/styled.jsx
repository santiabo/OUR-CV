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
  display:flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  opacity: 1;
`

export const Modal1 = styled.div`
  display:flex;
  flex-direction:column;
  z-index: 100;
  background: #f6f6fe;
  opacity: 1;
  position: relative;
  margin: 1.75rem auto;
  border-color:grey;
  border-style: solid; 
  border-width: 1px;
  border-radius: 5px;
  max-width: 400px;
  min-height:500px;
  padding: 2rem;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`

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
/* 
 export const ModalOverlay = styled.div`
  font-size: .9rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  padding: .3rem 1rem;
  margin-left: .5rem;
` */

