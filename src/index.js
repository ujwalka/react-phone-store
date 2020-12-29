import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'; //Can be placed in App.js, but less mess if placed here. BrowserRouter using alias Router, Router tags in render.
import {ProductProvider} from './context';
import reportWebVitals from './reportWebVitals';

// ProductProvider over the Router

ReactDOM.render(
  <ProductProvider>
      {/* <React.StrictMode> */}
        <Router>
           <App />
        </Router>
    {/* </React.StrictMode> */}
  </ProductProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
