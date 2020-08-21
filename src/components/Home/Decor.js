import React from 'react';
import mainDecor from '../../assets/images/Decoration.svg'

export const Decor = ({ text }) => {
    return (
        <>
            <p className="decor_title">
                {text}
            </p>
            <img src={mainDecor} className="decor_img" alt="decoration"/>
        </>
    )
}