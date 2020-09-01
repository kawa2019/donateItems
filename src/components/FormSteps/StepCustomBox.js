import React from 'react';

export const StepCustomBox = ({ stepChooseArr, handleChange, customBoxState, checkbox }) => {
    return (
        <ul className="choose_wrapper">
            {stepChooseArr.map((input, index) => {
                return (
                    <li className="oneToChoose" key={index}>
                        <input type={!checkbox ? "radio" : "checkbox"} id={!checkbox ? `radio_${index}` : `checkbox_${index}`} name={!checkbox ? "items" : input.name}
                            value={!checkbox && input.whatDonate} checked={!checkbox ? input.whatDonate === customBoxState.items : customBoxState[input.name]} onChange={handleChange} />
                        <label for={!checkbox ? `radio_${index}` : `checkbox_${index}`}>{input.text}</label>
                    </li>)
            })}
        </ul>
    )
}