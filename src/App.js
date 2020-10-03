import React, {useState} from 'react';


import {Home} from "./components/Home/Home"
import {Navigation} from './components/Nav/Navigation'
import {AccountUser} from './components/AccountUser/AccountUser'
import {LoggedOut} from './components/LoggedOut/LoggedOut'
import {DonateItemsFirstView} from './components/DonateItemsForm/DonateItemsFirstView'
import {Contact} from './components/Contact/Contact'
import {FormSteps} from './components/FormSteps/FormSteps'

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


const App = () => {
    const [loggedUser, setLoggedUser] = useState('');
    return (
        <HashRouter>
            <Navigation loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
            <Switch>
                <Route exact path="/">
                    <Home loggedUser={loggedUser}/>
                </Route>
                <Route path="/login">
                    <AccountUser setLoggedUser={setLoggedUser} textDecor="Zaloguj się"/>
                </Route>
                <Route path="/register">
                    <AccountUser loggedUser={loggedUser} setLoggedUser={setLoggedUser}
                                 kind="register" textDecor="Załóż konto"/>
                </Route>
                <Route path="/loggedOut" component={LoggedOut}/>
                <Route path="/donateItemsForm">
                    <DonateItemsFirstView/>
                    <FormSteps/>
                    <Contact/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
