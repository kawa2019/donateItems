import React from 'react';
import { PrivateData } from './PrivateData';
import { useFormContactLogic } from './useFormContactLogic';
import { BtnForm } from './BtnForm';

export const FormContact = ({ decor }) => {
    const { name, setName, email, setEmail, text, setText, errorName, errorEmail, errorText, validateSucess,
        handleForm } = useFormContactLogic()
    return (
        <form onSubmit={handleForm} className="formContact">
            {decor}
            {validateSucess && <p className="validateSucess">{validateSucess}</p>}
            <PrivateData label="Wpisz swoje imię" placeholder="Krzysztof"
                value={name} error={errorName} setData={setName} private_class="personalData" />
            <PrivateData label="Wpisz swój email" placeholder="abc@xyz.pl"
                value={email} error={errorEmail} setData={setEmail} private_class="personalData" />
            <PrivateData label="Wpisz swoją wiadomość"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laboris nisi ut aliquip ex ea commodo consequat."
                value={text} error={errorText} setData={setText} textarea private_class="message" />
            <BtnForm value="Wyślij" />
        </form>
    )
}