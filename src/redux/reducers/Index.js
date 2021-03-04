import { combineReducers } from 'redux'
import userReducer from "../reducers/user"
import printReducer from "../reducers/print"


const Reducers = combineReducers({
user: userReducer,
print: printReducer

});

export default Reducers;