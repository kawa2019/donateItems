import React from 'react';

export const StepsToDo = ({ stepNum }) => {
    return (
        <>
            <span className="form_stepNum">Krok:{stepNum}/4</span>
            <p className="important">Zaznacz co chcesz oddać:</p>
        </>
    )
} 