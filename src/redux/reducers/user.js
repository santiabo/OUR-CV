import { CHANGE_NAME } from '../actions/user';

const initialState = {
  user: {
    name: "Santiago Aguirre",
    title: "Full Stack Developer"
  }
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      console.log("ENTREEEEE")
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  };
};

export default userReducer;
