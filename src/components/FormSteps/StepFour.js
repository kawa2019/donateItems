import React from 'react';
import { StepCustomBox } from './StepCustomBox';

export const StepFour = ({ stepFourPickUpDate, stepFourAddressData, handleChange, customBoxState }) => {
    return (
        <div className="stepFour stepThreeFour">
            <StepCustomBox stepChooseArr={stepFourAddressData} customBoxState={customBoxState} handleChange={handleChange}
                textImportant="Adres odbioru:" type="text" />
            <StepCustomBox stepChooseArr={stepFourPickUpDate} customBoxState={customBoxState} handleChange={handleChange}
                textImportant="Termin odbioru:" type="text"/>
        </div>
    )
}