import React from 'react';

export const BtnsWhomHelp = ({allInstitutionArr, setType, type, setCurrentPage}) => {
    const btnBorder = (index) => {
        if (type === index) {
            return "whomHelpBorder"
        }
    }
    return (
        <div className="btnsWhomHelp">
            {allInstitutionArr.map((institution, index) => {
                return <button key={index} onClick={() => {
                    setType(index);
                    setCurrentPage(1)
                }}
                               className={btnBorder(index)}
                >{institution.typeHelp}</button>
            })
            }
        </div>
    )
}