import React from 'react';
import tshirt from '../../assets/images/t-shirt.png';
import location from '../../assets/images/location.png';

export const WhatGive = ({customBoxState, stepThreeChooseArr, stepChooseArr, selectLocation, selectBags}) => {
    const groupFn = () => {
        const groupArr = ["kids", "mothers", "homeless", "elderly", "disabled"].map(group => {
            if (customBoxState[group] !== "") {
                const text = stepThreeChooseArr[stepThreeChooseArr.findIndex(x => x.name === group)].text;
                return `, ${text}`
            }
        });
        return groupArr.map(group => group)
    }
    return (
        <div className="whatGive">
            <p className="important">Oddajesz:</p>
            <ul>
                <li>
                    <img src={tshirt}/>
                    <p>{selectBags !== "— wybierz —" && selectBags} worki, {stepChooseArr[stepChooseArr.findIndex(x => x.value === customBoxState.items)].text}
                        {groupFn()}</p>
                </li>
                <li>
                    <img src={location}/>
                    <p>dla
                        lokalizacji: {selectLocation !== "— wybierz —" && selectLocation}{customBoxState.orgName && customBoxState.orgName}</p>
                </li>
            </ul>
        </div>
    )
}