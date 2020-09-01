import React from 'react';

export const OrgName = ({customBoxState, handleChange}) => {
    return (
        <div className="orgName">
            <p className="important">Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
            <input type="text" name="orgName" value={customBoxState.orgName} onChange={handleChange}/>
        </div>
    )
}