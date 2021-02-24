import React from 'react'
import { GlobalStyle } from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/pages/index'
import store from './redux/index';
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Home />
      </Router>
    </Provider>
  );
}

export default App;
