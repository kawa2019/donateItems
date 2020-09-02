import React from 'react';
import { CustomSelect } from './CustomSelect';
import { StepCustomBox } from './StepCustomBox';

export const StepThree = ({ arrOption, selected, setSelect, listOpen, setListOpen, handleChange, customBoxState,
    stepChooseArr }) => {
    const orgNameArr = [{ name: "orgName" }];
    return (
        <div className="stepThree stepThreeFour">
            <CustomSelect arrOption={arrOption}
                selected={selected} setSelect={setSelect} listOpen={listOpen}
                setListOpen={setListOpen} />
            <StepCustomBox stepChooseArr={stepChooseArr} handleChange={handleChange} customBoxState={customBoxState}
                type="checkbox" textImportant="Komu chcesz pomóc?" />
            <StepCustomBox stepChooseArr={orgNameArr} customBoxState={customBoxState} handleChange={handleChange}
                textImportant="Wpisz nazwę konkretnej organizacji (opcjonalnie)" type="text" />
        </div>
    )
}