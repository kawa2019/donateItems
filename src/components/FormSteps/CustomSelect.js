import React, { useState } from 'react';
import { SelectList } from './SelectList';
import { Selected } from './Selected';

export const CustomSelect = ({ arrOption, description, selected, setSelect }) => {
    const [listOpen, setListOpen] = useState(false);
    return (
        <div className="dd-wrapper">
            <p className="dd-desc">{description}</p>
            <Selected selected={selected} listOpen={listOpen} setListOpen={setListOpen} />
            {listOpen && <SelectList arrOption={arrOption} setSelect={setSelect} />}
        </div>
    )
}