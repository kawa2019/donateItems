import React from 'react';
import {BtnForm} from '../Contact/FormContact/BtnForm';

export const ButtonsUser = ({kind}) => {
    return (
        <div className="buttonsUser">
            <BtnForm btn link={kind ? "login" : "register"} value={!kind ? "Załóż konto" : "Zaloguj się"}/>
            <BtnForm value={kind ? "Załóż konto" : "Zaloguj się"}/>
        </div>
    )
}