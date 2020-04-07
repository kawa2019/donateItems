import React from 'react';

import sign from "../../assets/images/Signature.svg"

export default function AboutUs() {
    return (
        <section id="aboutUs">
            <div className="container container_us">
                <div className="row about">
                    <div className="col-6 firstPart">
                        <div className="headerFoot">
                            <p>O nas</p>
                            <span className="main_dec">
                            </span>
                        </div>
                        <div className="about_allNori">
                            <p className="about_Nori">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                            <img src={sign} />
                        </div>
                    </div>
                    <div className="col-6 secondPart">
                    </div>
                </div>
            </div>
        </section>
    )
}