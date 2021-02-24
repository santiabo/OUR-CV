import { CHANGE_NAME } from '../actions/user';

const initialState = {
 
    name: "Santiago Aguirre",
    title: "Full Stack Developer",
    city: "Rio Ceballos",
    email: "santiabo@gmail.com",
    mobile: "+54 11 66735627",
  
};


const userReducer = (state = initialState, action) => {
  const user = action.user;
  switch (action.type) {
    case CHANGE_NAME:
      console.log("ENTREEEEE")
      return {
      ...state,
      ...user
      };
    default:
      return state;
  };
};

export default userReducer;
