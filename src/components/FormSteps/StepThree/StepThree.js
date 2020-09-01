import React from 'react';
import { CustomSelect } from '../CustomSelect';
import { StepCustomBox } from '../StepCustomBox';
import { OrgName } from './OrgName';

export const StepThree = ({ arrOption, selected, setSelect, listOpen, setListOpen, handleChange, customBoxState,
    stepChooseArr }) => {
    return (
        <div className="stepThree">
            <CustomSelect arrOption={arrOption}
                selected={selected} setSelect={setSelect} listOpen={listOpen}
                setListOpen={setListOpen} />
            <p className="important">Komu chcesz pomóc?</p>
            <StepCustomBox stepChooseArr={stepChooseArr} handleChange={handleChange} customBoxState={customBoxState} checkbox />
            <OrgName customBoxState={customBoxState} handleChange={handleChange} />
        </div>
    )
}