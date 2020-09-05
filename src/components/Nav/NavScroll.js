import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavScroll = ({ startBorder, setStartBorder }) => {
    const isTabletOrMobile = useMediaQuery({
        query: '(max-width: 850px)'
    });
    const [barsMenu, setBarsMenu] = useState(false);
    const closeMenuBarsFn = () => {
        if (isTabletOrMobile && barsMenu !== false) {
            setBarsMenu(false)
        }
    }
    return (
        <>
            {isTabletOrMobile && <FontAwesomeIcon icon={faBars} onClick={() => setBarsMenu(!barsMenu)} className="iconMenu" />}
            <ul className="menu barsMenu" style={{ display: isTabletOrMobile && !barsMenu && "none" }} onClick={() => { setStartBorder(true); closeMenuBarsFn() }}>
                <li
                ><Link to="/" className={startBorder && "nav_menuBorder"} onClick={() => setBarsMenu(false)}>Start</Link></li>
                <li><ScrollLink to="steps4" smooth={true} duration={1200} onClick={() => setBarsMenu(false)}>O co chodzi?</ScrollLink></li>
                <li><ScrollLink to="aboutUs" smooth={true} duration={1200} onClick={() => setBarsMenu(false)}>O nas</ScrollLink></li>
                <li><ScrollLink to="whomHelp" smooth={true} duration={1200} onClick={() => setBarsMenu(false)}>Fundacje i organizacje</ScrollLink></li>
                <li><ScrollLink to="footer" smooth={true} duration={1200} onClick={() => setBarsMenu(false)}>Kontakt</ScrollLink></li>
            </ul>
        </>
    )
}