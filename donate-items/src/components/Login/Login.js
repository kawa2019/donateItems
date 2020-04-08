import React from 'react';
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <section className="login">
            <div className="container">
                <form className="container-form">
                    <div className="headerFoot">
                        <p>Zaloguj się</p>
                        <span className="main_dec">
                        </span>
                    </div>
                    <div className="container-user">
                        <div className="data-user">
                            <div className="data-user-one">
                                <label>Email</label>
                                <input/>
                            </div>
                            <div className="data-user-one">
                                <label>Hasło</label>
                                <input/>
                            </div>
                        </div>
                        <div className="buttonsUser">
                        <input type="submit" value="Zaloguj się"/> 
                        <button><Link to="/register">Załóż konto</Link></button>
                        </div>                 
                    </div>
                </form>
            </div>
        </section>
    )
}