import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
export const NavScroll = ({ startBorder, setStartBorder }) => {
    return (
        <ul className="menu" onClick={() => setStartBorder(true)}>
            <li
            ><Link to="/" className={startBorder && "nav_menuBorder"}>Start</Link></li>
            <li><ScrollLink to="steps4" smooth={true} duration={1200}>O co chodzi?</ScrollLink></li>
            <li><ScrollLink to="aboutUs" smooth={true} duration={1200}>O nas</ScrollLink></li>
            <li><ScrollLink to="whomHelp" smooth={true} duration={1200}>Fundacje i organizacje</ScrollLink></li>
            <li><ScrollLink to="footer" smooth={true} duration={1200}>Kontakt</ScrollLink></li>
        </ul>
    )
}