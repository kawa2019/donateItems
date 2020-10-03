import React from 'react';
import {ImportantInfo} from './ImportantInfo';
import {StepsToDo} from './StepsToDo';
import {WhichSteps} from './WhichSteps';
import {ApplyBtn} from './ApplyBtn';
import {Decor} from '../Home/Decor';
import {useFormStepsLogic} from './useFormStepsLogic';

export const FormSteps = () => {
    const {
        stepNum, setStepNum, textStep, stepOneArr, handleChange, customBoxState, selectBags, setSelectBags, selectLocation, setSelectLocation,
        listOpen, setListOpen, stepThreeChooseArr, stepFourAddressData, stepFourPickUpDate, handleChangeErrors
    } = useFormStepsLogic()
    return (
        <section id="formStepsSection" className={stepNum > 3 ? "stepSectionSmall": undefined}>
            <div className="container">
                {stepNum < 4 && <ImportantInfo text={textStep[stepNum].textImportant}/>}
                {stepNum < 5 ? <form className="formSteps">
                    <StepsToDo stepNum={stepNum} text={textStep[stepNum].textToDO}/>
                    <WhichSteps stepOneArr={stepOneArr} handleChange={handleChange} customBoxState={customBoxState}
                                selectBags={selectBags} setSelectBags={setSelectBags} stepNum={stepNum}
                                selectLocation={selectLocation} setSelectLocation={setSelectLocation}
                                listOpen={listOpen} setListOpen={setListOpen} stepThreeChooseArr={stepThreeChooseArr}
                                stepFourAddressData={stepFourAddressData} stepFourPickUpDate={stepFourPickUpDate}/>
                    <ApplyBtn stepNum={stepNum} setStepNum={setStepNum} customBoxState={customBoxState}
                              setListOpen={setListOpen}
                              stepThreeChooseArr={stepThreeChooseArr} selectLocation={selectLocation}
                              handleChangeErrors={handleChangeErrors}/>
                </form> : <Decor
                    text="Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze."/>}
            </div>
        </section>
    )
}