import React from 'react';
import {FormAccountUser} from './FormAccountUser';

export const AccountUser = ({kind = "", textDecor, setLoggedUser}) => {
    return (
        <section className={`${kind} accountUser`}>
            <div className="container">
                <FormAccountUser textDecor={textDecor} kind={kind} setLoggedUser={setLoggedUser}/>
            </div>
        </section>
    )
}