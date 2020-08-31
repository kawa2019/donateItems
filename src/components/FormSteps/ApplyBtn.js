import React from 'react';
import { BtnFormSteps } from './BtnFormSteps';

export const ApplyBtn = ({stepNum, setStepNum, items}) => {
    const nextBtn = (e) => {
        e.preventDefault()
        if (items) {
            setStepNum(prevState => prevState + 1)
        }
    }
    const backBtn = (e) => {
        e.preventDefault();
        setStepNum(prevState => prevState - 1)
    }
    const applyBtn = () => {
        if (stepNum === 0) {
            return <BtnFormSteps handleStep={nextBtn} content="Dalej" />
        } else if (stepNum > 0 && stepNum < 4) {
            return (
                <>
                    <BtnFormSteps handleStep={backBtn} content="Wstecz" />
                    <BtnFormSteps handleStep={nextBtn} content="Dalej" />
                </>)
        } else {
            return null
        }
    }
    return (
        <>
            {applyBtn()}
        </>
    )
}