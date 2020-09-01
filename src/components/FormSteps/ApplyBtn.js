import React from 'react';
import { BtnFormSteps } from './BtnFormSteps';

export const ApplyBtn = ({ stepNum, setStepNum, customBoxState, setListOpen, stepThreeChooseArr
    , selectLocation }) => {
    const handleStateWhomHelp = () => {
        const groupsArr = stepThreeChooseArr.map(group => {
            return group.name
        })
        return groupsArr.find(group => customBoxState[group] === true)
    }
    const nextBtn = (e) => {
        e.preventDefault()
        if (stepNum === 2) {
            if ((customBoxState.orgName || selectLocation !== '— wybierz —') && handleStateWhomHelp()) {
                console.log(handleStateWhomHelp())
                setStepNum(prevState => prevState + 1);
                setListOpen(false)
            }
        } else {
            setStepNum(prevState => prevState + 1);
            setListOpen(false)
        }
    }
    const backBtn = (e) => {
        e.preventDefault();
        setStepNum(prevState => prevState - 1);
        setListOpen(false)
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