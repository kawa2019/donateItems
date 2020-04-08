import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home/index"
import Nav from "./components/Nav/index";

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
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login"/>
      <Route path="/register"/>
      </Switch>
    </HashRouter>
    );
}

export default App;
