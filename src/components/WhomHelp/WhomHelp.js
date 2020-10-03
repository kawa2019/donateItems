import React from 'react';
import {MainInfo} from './MainInfo/MainInfo';
import {BtnsWhomHelp} from './BtnsWhomHelp';
import {useWhomHelpLogic} from './useWhomHelpLogic';

export const WhomHelp = ({decor}) => {
    const {
        allInstitutionArr, currentPage, currentToShowArr,
        setCurrentPage, type, setType, pageNumbers
    } = useWhomHelpLogic()

    return (
        <section id="whomHelp">
            <div className="container">
                {decor}
                <BtnsWhomHelp allInstitutionArr={allInstitutionArr} type={type} setType={setType}
                              setCurrentPage={setCurrentPage}/>
                <MainInfo introText={allInstitutionArr[type].introText} currentToShowArr={currentToShowArr}
                          pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </section>
    )
}