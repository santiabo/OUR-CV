import styled from "styled-components";



export const Input = styled.textarea`
  width: 100%;
  background-color: #FFF;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border:1px solid #aabbbf;
  border-radius: 4px;
  cursor: text;
  font-size: 1rem;
  &::-webkit-input-placeholder {
    color: black;
`
export const Button = styled.button`
  margin-top:25px;
  margin-left:140px;
  box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
	background-color:#ffffff;
	border-radius:6px;
	border:2px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#00adb5;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;

  &:hover {
    background:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
	background-color:#f6f6f6;
`
