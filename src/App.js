import React, { useState } from 'react';


import {Home} from "./components/Home/index"
import {Navigation} from './components/Nav/Navigation'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import LoggedOut from './components/LoggedOut/LoggedOut'
import DonateItemsForm from './components/DonateItemsForm/DonateItemsForm'
import HomeContact from './components/HomeContact/HomeContact'
import FormStepOne from './components/FormStepOne/FormStepOne'

import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';



const App = () => {
  const [loggedUser, setLoggedUser] = useState('')
  console.log(loggedUser)
  console.log(loggedUser)
  return (
    <HashRouter>
      <Navigation loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login">
          <Login setLoggedUser={setLoggedUser} />
        </Route>
        <Route path="/register">
          <Register loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        </Route>
        <Route path="/loggedOut" component={LoggedOut} />
        <Route path="/donateItemsForm">
          <DonateItemsForm/>
          <FormStepOne/>
          <HomeContact/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
