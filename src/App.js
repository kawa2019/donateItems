import React, { useState } from 'react';


import { Home } from "./components/Home/Home"
import { Navigation } from './components/Nav/Navigation'
import { AccountUser } from './components/AccountUser/AccountUser'
import LoggedOut from './components/LoggedOut/LoggedOut'
import DonateItemsForm from './components/DonateItemsForm/DonateItemsForm'
import { Contact } from './components/Contact/Contact'
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
  return (
    <HashRouter>
      <Navigation loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login">
          <AccountUser setLoggedUser={setLoggedUser} textDecor="Zaloguj się" />
        </Route>
        <Route path="/register">
          <AccountUser loggedUser={loggedUser} setLoggedUser={setLoggedUser}
            kind="register" textDecor="Załóż konto" />
        </Route>
        <Route path="/loggedOut" component={LoggedOut} />
        <Route path="/donateItemsForm">
          <DonateItemsForm />
          <FormStepOne />
          <Contact />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
