import React, { useState } from 'react';
import { UserAction } from './UserAction';
import { NavScroll } from './NavScroll';

export const Navigation = ({ loggedUser, setLoggedUser }) => {
    const [startBorder, setStartBorder] = useState(true)


    return (
        <header>
            <div className="container">
                <nav>
                    <UserAction setStartBorder={setStartBorder} setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
                    <NavScroll startBorder={startBorder} setStartBorder={setStartBorder}  />
                </nav>
            </div>
        </header>)
}