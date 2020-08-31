import React from 'react';

export const BtnFormSteps = ({ handleStep, content }) => {
    return (
        <button onClick={handleStep} className="btn">
            {content}
        </button>
    )
}