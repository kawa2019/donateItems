import React from 'react';
import { PrivateData } from '../Contact/FormContact/PrivateData';

export const DataUser = ({ email, password, repeatPassword, errorEmail, errorPassword,
    errorRepeatPassword, setRepeatPassword, setEmail, setPassword, kind
}) => {
    return (
        <div className="data-user">
            <PrivateData label="Email"
                value={email} error={errorEmail} setData={setEmail} private_class="personalData" />
            <PrivateData label="Hasło" value={password} error={errorPassword} setData={setPassword} private_class="personalData" />
            {kind && <PrivateData label="Powtórz hasło" value={repeatPassword} error={errorRepeatPassword} setData={setRepeatPassword} private_class="personalData" />
            }
        </div>
    )
}