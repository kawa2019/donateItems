import React from 'react';

import fb from "../../assets/images/Facebook.svg";
import insta from "../../assets/images/Instagram.svg"

export const SocialContact = () => {
    return (
        <div className="socialContact">
            <span>
                <img src={fb} alt={""}/>
                <img src={insta} alt={""}/>
            </span>
        </div>
    )
}