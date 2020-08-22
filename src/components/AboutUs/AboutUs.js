import React from 'react';

import sign from "../../assets/images/Signature.svg"

export const AboutUs = ({decor}) => {
    return (
        <section id="aboutUs">
            <div className="container">
                <div className="aboutUsContent">
                    {decor}
                    <p className="aboutUsText">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={sign} className="signature"/>
                </div>
            </div>
        </section>
    )
}