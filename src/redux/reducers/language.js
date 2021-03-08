import {CHANGE_LANGUAGE} from '../actions/language'


const initialState = {language: "english"};

const languageReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_LANGUAGE:
    const newState = action.language;
      return {
        ...state,
        language: newState
      };
      default:
        return state;
    };
  };
  
  export default languageReducer;
  