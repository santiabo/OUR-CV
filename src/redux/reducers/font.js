import {CHANGE_FONT} from '../actions/font'


const initialState = {font: "GlobalStyleRoboto"};

const fontReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_FONT:
      return {
        ...state,
        font: action.font
      };
      default:
        return state;
    };
  };
  
  export default fontReducer;