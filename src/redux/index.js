import Reducers from './reducers/Index'
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";



const store = createStore(
  Reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;