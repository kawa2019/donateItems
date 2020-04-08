import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home/index"
import Navigation from './components/Nav/Navigation'
import Login from './components/Login/Login'

import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,  
} from 'react-router-dom';



const App=()=> {
  return (
    <HashRouter>
      <Navigation/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register"/>
      </Switch>
    </HashRouter>
    );
}

export default App;
