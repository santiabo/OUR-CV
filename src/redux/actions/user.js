import axios from 'axios';


export const CHANGE_NAME = "CHANGE_NAME";
export const  GET_USER = " GET_USER";


export const changeName = (user) => {
  return {
    type: CHANGE_NAME,
    user
  }
};

export const getUser = (user) => {
  return {
    type: GET_USER,
    user
  }
};