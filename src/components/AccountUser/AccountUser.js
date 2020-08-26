import React from 'react';
import { FormAccountUser } from './FormAccountUser';

export const AccountUser = ({ kind="", textDecor }) => {
    return (
        <section className={`${kind} accountUser`}>
            <div className="container">
                <FormAccountUser textDecor={textDecor} kind={kind} />
            </div>
        </section>
    )
}