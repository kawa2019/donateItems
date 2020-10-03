import {useState} from 'react';

export const useFormContactLogic = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [errorName, setErrorName] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorText, setErrorText] = useState("")
    const [validateSucess, setValidateSucess] = useState("")
    const handleForm = async (e) => {
        e.preventDefault();
        setValidateSucess("");
        setErrorName("");
        setErrorEmail("");
        setErrorText("");
        try {
            const response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                body: JSON.stringify({name, email, message: text}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data)
            if (data.status === "error") {
                data.errors.map(error => {
                    if (error.param === "name") {
                      return   setErrorName('Podane imię jest nieprawidłowe');
                    } else if (error.param === "email") {
                      return   setErrorEmail('Podane email jest nieprawidłowe');
                    } else {
                       return  setErrorText('Wiadomość musi mieć conajmniej 120 znaków!');
                    }
                })
            } else {
                setValidateSucess(data.status.toUpperCase());
                console.log(data.status)
            }
        } catch (error) {
            alert(error)
            console.log(error);
        }
    }
    return {
        name, setName, email, setEmail, text, setText, errorName, errorEmail, errorText, validateSucess,
        setValidateSucess, handleForm
    }
}