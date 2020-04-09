import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Register() {
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [passwordRepeat,setPasswordRepeat] = useState("")
    const [passwordErrorRepeat,setErrorPasswordRepeat] = useState("")

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())
    }

    const handleForm = (e) => {
        e.preventDefault();
        setErrorEmail("")
        setErrorPassword("")
        if (!validateEmail(email)) {
            setErrorEmail("Podany email jest nieprawidłowy")
        }
        if (password.length < 6) {
            setErrorPassword("Podane hasło jest za krótkie")
        } 
        if (!(password==passwordRepeat)){
            setErrorPasswordRepeat("Hasła muszą być identyczne")
            return;
        }
    }

    const myBorder = (error) => {
        let style = {}
        if (error) {
            return style = {
                borderBottom: "1px solid red"
            }
        }
    }  

    return (
        <section className="register">
            <div className="container">
                <form className="container-form" onSubmit={handleForm}>
                    <div className="headerFoot">
                        <p>Załóż konto</p>
                        <span className="main_dec">
                        </span>
                    </div>
                    <div className="container-user">
                        <div className="data-user">
                            <div className="data-user-one" style={myBorder(errorEmail)}>
                                <label>Email</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            {errorEmail && <p style={{color: "red",marginLeft:"5rem"}}>{errorEmail}</p>}
                            <div className="data-user-one" style={myBorder(errorPassword)}>
                                <label>Hasło</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {errorPassword && <p style={{color: "red",marginLeft:"5rem"}}>{errorPassword}</p>}
                            <div className="data-user-one" style={myBorder(errorEmail)}>
                                <label>Powtórz hasło</label>
                                <input type="text" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} />
                            </div>
                            {passwordErrorRepeat && <p style={{color: "red",marginLeft:"5rem"}}>{passwordErrorRepeat}</p>}
                        </div>
                        <div className="buttonsUser">
                            <input type="submit" value="Załóż konto" />
                            <button><Link to="/login">Zaloguj się</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}