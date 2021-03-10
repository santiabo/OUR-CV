import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from './redux/actions/user';
import Home from '../src/pages/index'
import {
  GlobalStyleDot,
  GlobalStyleMontserrat,
  GlobalStyleRoboto,
  GlobalStyleBitter,
  GlobalStyleNews
} from './globalStyles';

function App() {
  
  const font = useSelector((state) => state.font.font)
  const loggedUser = useSelector((state) => state.user.loggedUser.id)

  const dispatch = useDispatch();
  useEffect(() => {
   if (loggedUser){ 
     dispatch(getUser(loggedUser));
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
//REDEPLOY !

export default App;
