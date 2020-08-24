import React from 'react';
import {AllSteps} from './AllSteps'
import t_shirt from "../../assets/images/Icon-1.svg"
import pack from "../../assets/images/Icon-2.svg"
import search from "../../assets/images/Icon-3.svg"
import circle from "../../assets/images/Icon-4.svg"

export const Steps4 = ({ decor, cta1 }) => {
    const steps4_allStepsArr = [{ img: t_shirt, textUp: "Wybierz rzeczy", textBottom: "ubrania, zabawki, sprzęt i inne" },
    { img: pack, textUp: "Spakuj je", textBottom: "skorzystaj z worków na śmieci" },
    { img: search, textUp: "Zdecyduj komu chcesz pomóc", textBottom: "wybierz zaufane miejsce" },
    { img: circle, textUp: "Zamów kuriera", textBottom: "kurier przyjedzie w dogodnym terminie" }]
    return (
        <section className="steps4_wrapper" id="steps4">
            <div className="container">
                {decor}
                <AllSteps steps4_allStepsArr={steps4_allStepsArr}/>
                {cta1}
            </div>
        </section>
    )
}