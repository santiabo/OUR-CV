import {PRINT} from '../actions/print'


const initialState = {printing: false};

const printReducer = (state = initialState, action) => {

  switch (action.type) {
    case PRINT:
    const newState = !state.printing;
      return {
        ...state,
        printing: newState
      };
      default:
        return state;
    };
  };
  
  export default printReducer;
  