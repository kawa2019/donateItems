import React from 'react';
import {Link} from 'react-router-dom';

export const UserAction = ({setStartBorder, setLoggedUser, loggedUser}) => {
    return (
        <>
            {!loggedUser &&
            <ul className="nav_user" onClick={() => setStartBorder(false)}>
                <li><Link to="/login">Zaloguj</Link></li>
                <li><Link to="/register" className="nav_userBorder">Zarejestruj się</Link></li>
            </ul>}
            {loggedUser &&
            <ul className="nav_user">
                <li>{loggedUser}</li>
                <li onClick={() => setStartBorder(false)}><Link to="/donateItemsForm"
                                                                className="nav_userBorder nav_userColor">Oddaj
                    rzeczy</Link></li>
                <li onClick={() => setStartBorder(false)}><Link to="/loggedOut"
                                                                onClick={() => setLoggedUser("")}>Wyloguj</Link></li>
            </ul>}
        </>
    )
}