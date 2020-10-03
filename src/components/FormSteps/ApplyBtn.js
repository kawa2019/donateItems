import React from 'react';
import {BtnFormSteps} from './BtnFormSteps';

export const ApplyBtn = ({
                             stepNum, setStepNum, customBoxState, setListOpen, stepThreeChooseArr
                             , selectLocation, handleChangeErrors
                         }) => {
    const handleStateWhomHelp = () => {
        const groupsArr = stepThreeChooseArr.map(group => {
            return group.name
        })
        return groupsArr.find(group => customBoxState[group] === true)
    }
    const errorStateName = ["street", "postCode", "phone", "city", "date", "time"]
    const nextBtn = (e) => {
        e.preventDefault();
        if (stepNum === 2) {
            const errorArr = [];
            if (customBoxState.orgName || selectLocation === '— wybierz —') {
                errorArr.push(customBoxState.orgName);
                handleChangeErrors("Brak lokalizacji!", "location")
            }
            if (!handleStateWhomHelp()) {
                errorArr.push("lack of group");
                handleChangeErrors("Brak grupy docelowej!", "group")
            }
            if (errorArr.length === 0) {
                handleChangeErrors("", "location");
                handleChangeErrors("", "group");
                setStepNum(prevState => prevState + 1);
                setListOpen(false)
            }
            ;
        } else if (stepNum === 3) {
            const errorArr = []
            if (customBoxState.street.length < 2) {
                errorArr.push(customBoxState.street);
                handleChangeErrors("Za krótka nazwa ulicy!", "street")
            }
            ;
            console.log((customBoxState.street.length < 2))
            if (!/[0-9]{2}\-[0-9]{3}/.test(customBoxState.postCode)) {
                errorArr.push(customBoxState.postCode);
                handleChangeErrors("Niepoprawny format, np.xx-xxx!", "postCode")
            }
            if (customBoxState.city.length < 2) {
                errorArr.push(customBoxState.city);
                handleChangeErrors("Za krótka nazwa miasta!", "city")
            }
            if (!/[0-9]{9}/.test(customBoxState.phone)) {
                errorArr.push(customBoxState.phone);
                handleChangeErrors("Telefon musi mieć 9 cyfr!", "phone")
            }
            if (!customBoxState.date) {
                errorArr.push(customBoxState.date);
                handleChangeErrors("Brak daty!", "date")
            }
            ;
            if (!customBoxState.time) {
                errorArr.push(customBoxState.time);
                handleChangeErrors("Brak czasu!", "time")
            }
            ;
            if (errorArr.length === 0) {
                errorStateName.map(errorName => handleChangeErrors("", errorName))
                setStepNum(prevState => prevState + 1);
                setListOpen(false)

            }
        } else {
            setStepNum(prevState => prevState + 1);
            setListOpen(false)
        }
    }
    const backBtn = (e) => {
        if (stepNum === 2) {
            handleChangeErrors("", "location");
            handleChangeErrors("", "group");
        }
        if (stepNum === 3) {
            errorStateName.map(errorName => handleChangeErrors("", errorName))
        }
        e.preventDefault();
        setStepNum(prevState => prevState - 1);
        setListOpen(false)
    }
    return (
        <>
            {stepNum > 0 && stepNum < 5 && <BtnFormSteps handleStep={backBtn} content="Wstecz"/>}
            {stepNum < 5 && <BtnFormSteps handleStep={nextBtn} content={stepNum < 4 ? "Dalej" : "Potwierdzam"}/>}
        </>
    )
}