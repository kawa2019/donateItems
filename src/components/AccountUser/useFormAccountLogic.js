import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

export const useFormAccountLogic = (kind, {setLoggedUser}) => {
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorRepeatPassword, setErrorRepeatPassword] = useState("");
    let history = useHistory();
    useEffect(() => {
        setErrorEmail("");
        setErrorPassword("");
        setErrorRepeatPassword("");
    }, [kind])
    const validateEmail = (email) => {
        const regexEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(email.toLowerCase())
    }

    const handleForm = (e) => {
        e.preventDefault();
        setErrorEmail("");
        setErrorPassword("");
        setErrorRepeatPassword("");
        const errorsArr = []
        if (!validateEmail(email)) {
            setErrorEmail("Podany email jest nieprawidłowy");
            errorsArr.push(email);
        }
        if (password.length < 6) {
            setErrorPassword("Podane hasło jest za krótkie")
            errorsArr.push(password);
        }
        if (repeatPassword !== password && kind) {
            setErrorRepeatPassword("Hasła muszą być takie same");
            errorsArr.push(repeatPassword);
        }
        if (errorsArr.length === 0) {
            setLoggedUser(email);
            history.push("/");
        }
    }
    return {
        email, password, repeatPassword, setEmail, setPassword, setRepeatPassword,
        errorEmail, errorPassword, errorRepeatPassword, handleForm
    }
}