import React from 'react';

export const BtnFormSteps = ({ handleStepOne }) => {
    return (
        <button onClick={handleStepOne} className="confirm">
            Dalej
        </button>
    )
}