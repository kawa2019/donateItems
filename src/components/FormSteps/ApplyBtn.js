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
                setStepNum(prevState => prevState + 1);
                setListOpen(false)
            }
        } else if (stepNum === 3) {
            const errorArr = []
            if (customBoxState.street.lenght < 2) { errorArr.push(customBoxState.street) };
            if (!/[0-9]{2}\-[0-9]{3}/.test(customBoxState.postCode)) { errorArr.push(customBoxState.postCode) }
            if (customBoxState.city.lenght < 2) { errorArr.push(customBoxState.city) }
            if (!/[0-9]{9}/.test(customBoxState.phone)) { errorArr.push(customBoxState.phone) }
            if (!customBoxState.date) { errorArr.push(customBoxState.date) };
            if (!customBoxState.time) { errorArr.push(customBoxState.time) }
            if (errorArr.length === 0) {
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