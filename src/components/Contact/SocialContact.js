import React from 'react';

import fb from "../../assets/images/Facebook.svg";
import insta from "../../assets/images/Instagram.svg"

export const SocialContact = () => {
    return (
        <div className="socialContact">
            <span>
                <img src={fb} />
                <img src={insta} />
            </span>
        </div>
    )
}