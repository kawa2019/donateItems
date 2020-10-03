import React from 'react';
import {StepCustomBox} from './StepCustomBox';
import {WhatGive} from './WhatGive';

export const Sum = ({stepFourAddressData, stepFourPickUpDate, customBoxState, selectBags, stepChooseArr, stepThreeChooseArr, selectLocation}) => {

    return (
        <div className="sum">
            <WhatGive customBoxState={customBoxState} stepThreeChooseArr={stepThreeChooseArr}
                      stepChooseArr={stepChooseArr} selectLocation={selectLocation} selectBags={selectBags}/>
            <div className="stepFour">
                <StepCustomBox stepChooseArr={stepFourAddressData} customBoxState={customBoxState}
                               textImportant="Adres odbioru:" type="text" sum/>
                <StepCustomBox stepChooseArr={stepFourPickUpDate} customBoxState={customBoxState}
                               textImportant="Termin odbioru:" type="text" sum/>
            </div>
        </div>
    )
}