import React from 'react';
import {SelectList} from './SelectList';
import {Selected} from './Selected';

export const CustomSelect = ({arrOption, description, selected, setSelect, listOpen, setListOpen, error}) => {
    return (
        <div className="dd-wrapper">
            {description && <p className="dd-desc">{description}</p>}
            <Selected selected={selected} listOpen={listOpen} setListOpen={setListOpen} error={error}/>
            {listOpen && <SelectList arrOption={arrOption} setSelect={setSelect}/>}
        </div>
    )
}