import React from "react";
import {Decor} from "../Home/Decor";
import {BtnForm} from "../Contact/FormContact/BtnForm";

export const LoggedOut = () => {
    return (
        <section className="loggedOut">
            <div className="container">
                <div className="container-loggedOut">
                    <Decor text="Wylogowanie nastąpiło pomyślnie!"/>
                    <BtnForm btn value="Strona główna"/>
                </div>
            </div>
        </section>
    )
}