import React from 'react';

export const SelectList = ({ arrOption, setSelect }) => {
    return (
        <ul className="dd-list">
            {arrOption.map((option, index) => {
                return <li key={index} onClick={() => setSelect(option)}>{option}</li>
            })}
        </ul>
    )
}