import React, { useState, useEffect,useRef } from 'react';
import { Link,useHistory } from 'react-router-dom'

export default function Login({ setLoggedUser }) {
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [user, setUser] = useState({});
    const history = useHistory()
    const isInitialMount = useRef(true);

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
            return;
        }

        fetch(`http://localhost:4000/signin`, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((user1) => user1.json())
            .then(user1 => setUser(user1))


    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
        fetch(`http://localhost:4000/600/users/${email}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.accessToken}`
            }
        }).then(res => res.json()
        ).then(res => { if (res != "jwt malformed") {setLoggedUser(res);history.push("/")}})
         

     }}, [user])

    const myBorder = (error) => {
        let style = {}
        if (error) {
            return style = {
                borderBottom: "1px solid red"
            }
        }
    }

    return (
        <section className="login">
            <div className="container">
                <form className="container-form" onSubmit={handleForm}>
                    <div className="headerFoot">
                        <p>Zaloguj się</p>
                        <span className="main_dec">
                        </span>
                    </div>
                    <div className="container-user">
                        <div className="data-user">
                            <div className="data-user-one" style={myBorder(errorEmail)}>
                                <label>Email</label>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            {errorEmail && <p style={{ color: "red", marginLeft: "5rem" }}>{errorEmail}</p>}
                            <div className="data-user-one" style={myBorder(errorPassword)}>
                                <label>Hasło</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {errorPassword && <p style={{ color: "red", marginLeft: "5rem" }}>{errorPassword}</p>}
                        </div>
                        <div className="buttonsUser">
                            <input type="submit" value="Zaloguj się" />
                            <button><Link to="/register">Załóż konto</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}