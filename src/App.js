import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/pages/index'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from './redux/actions/user';

import {
  GlobalStyleDot,
  GlobalStyleMontserrat,
  GlobalStyleRoboto,
  GlobalStyleBitter,
  GlobalStyleNews
} from './globalStyles';

function App() {
  
  const font = useSelector((state) => state.font.font)
  const loggedUser = useSelector((state) => state.loggedUser.loggedUser)

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("loggedUser", loggedUser)
   if (loggedUser){ 
     dispatch(getUser(loggedUser.id));
   }    
 }); 

  return (
    <Router>
      {font === "GlobalStyleDot" && <GlobalStyleDot />}
      {font === "GlobalStyleRoboto" && <GlobalStyleRoboto />}
      {font === "GlobalStyleMontserrat" && <GlobalStyleMontserrat />}
      {font === "GlobalStyleBitter" && <GlobalStyleBitter />}
      {font === "GlobalStyleNews" && <GlobalStyleNews />}
      <Home />
    </Router>
  );
}

export default App;
