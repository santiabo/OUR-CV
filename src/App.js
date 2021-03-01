import React, { useEffect } from 'react'
import { GlobalStyle } from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/pages/index'
import { useDispatch } from "react-redux";
import {getUser} from "./redux/actions/user";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
		dispatch(getUser(1));
	});  

  return (
      <Router>
        <GlobalStyle />
        <Home />
      </Router>
  );
}

export default App;
