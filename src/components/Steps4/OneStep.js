import React from 'react';

export const OneStep = ({ step }) => {
    return (
        <div className="one_step">
            <img src={step.img} />
            <p className="one_stepTextUp">{step.textUp}</p>
            <p className="one_stepTextBottom">{step.textBottom}</p>
        </div>
    )
}