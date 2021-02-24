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
  z-index: 100;
  background: grey;
  opacity: 0.9;
  position: relative;
  margin: 1.75rem auto;
  border-style: solid; 
  border-width: 2px;
  border-radius: 10px;
  max-width: 500px;
  padding: 2rem;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
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
