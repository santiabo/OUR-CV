import { combineReducers } from 'redux';
import userReducer from "../reducers/user";
import printReducer from "../reducers/print";
import fontReducer from "../reducers/font";
import languageReducer from "../reducers/language";

const Reducers = combineReducers({
user: userReducer,
print: printReducer,
font: fontReducer,
language: languageReducer,
});

export default Reducers;