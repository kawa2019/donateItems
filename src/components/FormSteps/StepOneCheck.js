import React from 'react';

export const StepOneCheck = ({ stepOneArr, handleChange, items }) => {
    return (
        <ul className="choose_wrapper">
            {stepOneArr.map((input, index) => {
                return (
                    <li className="oneToChoose">
                        <input type="checkbox" id={`checkbox_${index}`} name="items" value={input.whatDonate} checked={input.whatDonate === items} onChange={handleChange} />
                        <label for={`checkbox_${index}`}>{input.text}</label>
                    </li>)
            })}
        </ul>
    )
}