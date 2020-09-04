import React from 'react';
import { StepCustomBox } from './StepCustomBox';
import { StepThree } from './StepThree';
import { CustomSelect } from './CustomSelect';
import { StepFour } from './StepFour';
import { Sum } from './Sum';

export const WhichSteps = ({ stepOneArr, handleChange, customBoxState, selectBags, setSelectBags, stepNum,
    selectLocation, setSelectLocation, listOpen, setListOpen, stepThreeChooseArr,
    stepFourPickUpDate, stepFourAddressData }) => {
    const locationsArr = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"]
    const handleSteps = () => {
        switch (stepNum) {
            case 0:
                return <StepCustomBox stepChooseArr={stepOneArr} handleChange={handleChange} customBoxState={customBoxState} type="radio" />;
            case 1:
                return <CustomSelect arrOption={[1, 2, 3, 4, 5]} description="Liczba 60l worków:"
                    selected={selectBags} setSelect={setSelectBags} listOpen={listOpen}
                    setListOpen={setListOpen} />
            case 2:
                return <StepThree arrOption={locationsArr}
                    selected={selectLocation} setSelect={setSelectLocation} listOpen={listOpen}
                    setListOpen={setListOpen} handleChange={handleChange} customBoxState={customBoxState}
                    stepChooseArr={stepThreeChooseArr} />
            case 3:
                return <StepFour stepFourPickUpDate={stepFourPickUpDate} stepFourAddressData={stepFourAddressData}
                    handleChange={handleChange} customBoxState={customBoxState} />
            case 4:
                return <Sum stepFourPickUpDate={stepFourPickUpDate} stepFourAddressData={stepFourAddressData}
                    customBoxState={customBoxState} selectBags={selectBags} stepChooseArr={stepOneArr} stepThreeChooseArr={stepThreeChooseArr}
                    selectLocation={selectLocation} />
        }
    }
    return (
        <>
            {handleSteps()}
        </>
    )
}