import React from 'react';

export const StepsToDo = ({ stepNum, text }) => {
    return (
        <>
            <span className="form_stepNum">Krok:{stepNum+1}/4</span>
            <p className="important">{text}</p>
        </>
    )
} 