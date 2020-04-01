import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home/index"

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
      <Route path="/" component={Home}/>
    </HashRouter>
    );
}

export default App;
