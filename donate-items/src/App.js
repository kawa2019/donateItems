import React from 'react';
import './App.css';

import Home from "./components/Home/index"
import Navigation from './components/Nav/Navigation'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import LoggedOut from './components/LoggedOut/LoggedOut'

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
      <Route path="/register" component={Register}/>
      <Route path="/loggedOut" component={LoggedOut}/>
      </Switch>
    </HashRouter>
    );
}

export default App;
