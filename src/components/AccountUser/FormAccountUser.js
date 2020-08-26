import React from 'react';
import { Decor } from '../Home/Decor';
import { ButtonsUser } from './ButtonsUser';
import { DataUser } from './DataUser';
import {useFormAccountLogic} from './useFormAccountLogic';

export const FormAccountUser = ({ textDecor, kind }) => {
    const {email, password, repeatPassword, setEmail, setPassword, setRepeatPassword,
        errorEmail, errorPassword , errorRepeatPassword, handleForm} =useFormAccountLogic(kind)

    return (
        <form className="formAccountUser" onSubmit={handleForm}>
            <Decor text={textDecor} />
            <DataUser email={email} password={password} errorEmail={errorEmail}
                errorPassword={errorPassword} setEmail={setEmail} setPassword={setPassword} kind={kind}
                repeatPassword={repeatPassword} setRepeatPassword={setRepeatPassword}
                errorRepeatPassword={errorRepeatPassword} />
            <ButtonsUser kind={kind} />
        </form>
    )
}