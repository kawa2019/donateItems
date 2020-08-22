import React from 'react';
import mainDecor from '../../assets/images/Decoration.svg'

export const Decor = ({ text }) => {
    return (
        <div className="decor">
            <p className="decor_title">
                {text}
            </p>
            <img src={mainDecor} className="decor_img" alt="decoration" />
        </div>)
}