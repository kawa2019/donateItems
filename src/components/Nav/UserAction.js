import React from 'react';
import { Link } from 'react-router-dom';
export const UserAction = ({ loggedUser, setStartBorder, handelLog }) => {
    return (
        <>
            {!loggedUser &&
                <ul className="nav_user" onClick={() => setStartBorder(false)}>
                    <li ><Link to="/login">Zaloguj</Link></li>
                    <li ><Link to="/register" className="nav_userBorder">Zarejestruj się</Link></li>
                </ul>}
            {loggedUser &&
                <ul className="nav_user">
                    <li style={{ padding: "0.7rem 1.3rem" }}>{loggedUser.id}</li>
                    <li onClick={() => setStartBorder(false)} ><Link to="/donateItemsForm" className="nav_userBorder">Oddaj rzeczy</Link></li>
                    <li onClick={() => setStartBorder(false)}><Link to="/loggedOut" onClick={handelLog}>Wyloguj</Link></li>
                </ul>}
        </>
    )
}