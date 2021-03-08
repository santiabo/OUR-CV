import { combineReducers } from 'redux';
import userReducer from "../reducers/user";
import printReducer from "../reducers/print";
import fontReducer from "../reducers/font";
import languageReducer from "../reducers/language";
import loggedReducer from "../reducers/logged"

const Reducers = combineReducers({
user: userReducer,
print: printReducer,
font: fontReducer,
language: languageReducer,
loggedUser: loggedReducer
});

export default Reducers;