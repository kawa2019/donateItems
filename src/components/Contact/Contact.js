import React from "react";
import { FormContact } from './FormContact/FormContact';
import { SocialContact } from './SocialContact';

export const Contact = ({ decor }) => {
    return (
        <footer id="footer">
            <div className="container">
                <FormContact decor={decor} />
                <SocialContact />
                <p className="copyright">Copyright by Coders Lab</p>
            </div>
        </footer>
    )
}