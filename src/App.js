// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; //Do not knowif this line is necessary and how Component works.
import {Switch, Route} from 'react-router-dom'; //Route, Switch, BrowserRouter.
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

// Sharing the same product?? setting up the App as a State
// prop drilling ==> all data in the same place https://www.carlrippon.com/playing-with-the-context-api-in-react-16-3/
// Context api is a better way, similar to redux??
// More reading on context and props needed

function App() {
  return (
    <>
    {/* Navbar is outside because it should be available on all pages */}
      <Navbar></Navbar> 
      <Switch>
        {/* Details and Cart wasnt loading, "exact" solves the problem, or move the "/" to bottom */}
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="*" component={Default}></Route>
      </Switch>
     <Modal />
    </>

  );
}

export default App;
