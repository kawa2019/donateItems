import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export default function ({ loggedUser,setLoggedUser }) {

    const [startBorder, setStartBorder] = useState("")
    const myBorder = () => {
        let style = {}
        if (startBorder) {
            return style = {
                border: "0.05rem solid #3C3C3C"
            }
        }
    }

    const handelLog = ()=>{
        setLoggedUser("")
    }

    return (
        <header>
            <div className="container">
                <nav>
                    <div>
                        {!loggedUser && <ul className="user">
                            <li onClick={() => setStartBorder(true)}><Link to="/login">Zaloguj</Link></li>
                            <li><Link to="/register">Zarejestruj się</Link></li>
                        </ul>}
                        {loggedUser && <ul className="user">
                            <li style={{padding: "0.7rem 1.3rem"}}>{loggedUser.id}</li>
                            <li onClick={() => setStartBorder(true)}><Link to="/donateItemsForm">Oddaj rzeczy</Link></li>
                            <li><Link to="/loggedOut" onClick={handelLog}>Wyloguj</Link></li>
                        </ul>}
                        <ul className="menu">
                            <li style={myBorder(startBorder)}
                            ><Link to="/" onClick={() => setStartBorder(false)} className="start">Start</Link></li>
                            <li><ScrollLink to="core" smooth={true} duration={1200}>O co chodzi?</ScrollLink></li>
                            <li><ScrollLink to="aboutUs" smooth={true} duration={1200}>O nas</ScrollLink></li>
                            <li><ScrollLink to="toHelp" smooth={true} duration={1200}>Fundacje i organizacje</ScrollLink></li>
                            <li><ScrollLink to="footer" smooth={true} duration={1200}>Kontakt</ScrollLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>)
}