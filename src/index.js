import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/index';
import { Provider } from "react-redux";
import App from './App';
import dotenv from "dotenv";
import axios from "axios";


axios.defaults.baseURL = "https://our-curriculum.herokuapp.com/" || "http://localhost:3001"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

