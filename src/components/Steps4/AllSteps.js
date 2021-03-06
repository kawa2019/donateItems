import React from 'react';
import {OneStep} from './OneStep';

export const AllSteps = ({steps4_allStepsArr}) => {
    return (
        <div className="steps4_allSteps">
            {steps4_allStepsArr.map((step, index) => {
                return <OneStep step={step} key={index}/>
            })}
        </div>
    )
}