import React from 'react';

export const StepCustomBox = ({
                                  stepChooseArr, handleChange,
                                  customBoxState, type, textImportant, error, sum
                              }) => {
    const controlledChecked = (tag) => {
        if (type === "radio") {
            return tag.value === customBoxState.items
        } else if (type === "checkbox") {
            return customBoxState[tag.name]
        }
    }
    const controlledValue = (tag) => {
        if (type === "radio") {
            return tag.value
        } else if (type === "text" || tag.name === "date" || tag.name === "time") {
            return customBoxState[tag.name]
        }
    }
    const controlledType = (tag) => {
        if (tag.name === "date") {
            return "date"
        } else if (tag.name === "time") {
            return "time"
        } else return type
    }
    const oneBoxInner = (tag, index) => {
        if (tag.name !== "comment") {
            return (
                <>
                    <input type={controlledType(tag)} className={customBoxState[`error_${tag.name}`] && "errorData"}
                           id={`${type}_${index}`} name={!tag.name ? "items" : tag.name}
                           value={controlledValue(tag)} checked={controlledChecked(tag)} onChange={handleChange}
                           readOnly={sum && "readOnly"}/>
                    {tag.text && <label htmlFor={`${type}_${index}`}>{tag.text}</label>}
                </>
            )
        } else {
            return (
                <>
                    <textarea type={controlledType(tag)} className={customBoxState[`error_${tag.name}`] && "errorData"}
                              id={`${type}_${index}`} name={!tag.name ? "items" : tag.name}
                              value={controlledValue(tag)} checked={controlledChecked(tag)} onChange={handleChange}
                              readOnly={sum && "readOnly"}/>
                    {tag.text && <label htmlFor={`${type}_${index}`}>{tag.text}</label>}
                </>
            )
        }
    }
    return (
        <div className={!error ? "customBox_wrapper" : "customBox_wrapper errorData"}>
            {textImportant && <p className="important">{textImportant}</p>}
            <ul className="customBoxList_wrapper">
                {stepChooseArr.map((tag, index) => {
                    return (
                        <li className="oneBox" key={index}>
                            {oneBoxInner(tag, index)}
                        </li>)
                })}
            </ul>
        </div>
    )
}