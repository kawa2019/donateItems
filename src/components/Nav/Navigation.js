import React, { useState } from 'react';
import { UserAction } from './UserAction';
import { NavScroll } from './NavScroll';

export const Navigation = ({ loggedUser, setLoggedUser }) => {
    const [startBorder, setStartBorder] = useState(true)
    const handelLog = () => {
        setLoggedUser("")
    }

    return (
        <header>
            <div className="container">
                <nav>
                    <UserAction loggedUser={loggedUser} setStartBorder={setStartBorder} handelLog={handelLog} />
                    <NavScroll startBorder={startBorder} setStartBorder={setStartBorder} />
                </nav>
            </div>
        </header>)
}