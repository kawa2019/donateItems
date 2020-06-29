import React from "react";
import { Link } from 'react-router-dom'

export default function LoggedOut() {
    return (
        <section className="loggedOut">
            <div className="container">
                <div className="container-loggedOut">
                    <div className="headerFoot">
                        <p>Wylogowanie nastąpiło pomyślnie!</p>
                        <span className="main_dec">
                        </span>
                    </div>
                    <button><Link to="/">Strona główna</Link></button>
                </div>
            </div>
        </section>
    )
}