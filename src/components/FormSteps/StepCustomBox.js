import React from 'react';

export const StepCustomBox = ({ stepChooseArr, handleChange, customBoxState, type, textImportant }) => {
    const controlledChecked = (input) => {
        if (type === "radio") {
            return input.value === customBoxState.items
        } else if (type === "checkbox") {
            return customBoxState[input.name]
        }
    }
    const controlledValue = (input) => {
        if (type === "radio") {
            return input.value
        } else if (type === "text" || input.name === "date" || input.name === "time") {
            return customBoxState[input.name]
        }
    }
    const controlledType = (input) => {
        if (input.name === "date") { return "date" }
        else if (input.name === "time") {
            return "time"
        }
        else return type
    }
    return (
        <div className="customBox_wrapper">
            {textImportant && <p className="important">{textImportant}</p>}
            <ul className="customBoxList_wrapper">
                {stepChooseArr.map((input, index) => {
                    return (
                        <li className="oneBox" key={index}>
                            <input type={controlledType(input)} id={`${type}_${index}`} name={!input.name ? "items" : input.name}
                                value={controlledValue(input)} checked={controlledChecked(input)} onChange={handleChange} />
                            {input.text && <label htmlFor={`${type}_${index}`}>{input.text}</label>}
                        </li>)
                })}
            </ul>
        </div>
    )
}