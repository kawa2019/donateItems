import React from 'react';
import { TypeHelp } from './TypeHelp';
import { Pagination } from './Pagination';

export const MainInfo = ({ introText, currentToShowArr, pageNumbers, setCurrentPage }) => {
    return (
        <div className="mainInfo">
            <p className="introText">{introText}</p>
            <TypeHelp currentToShowArr={currentToShowArr} />
            <Pagination pageNumbers={pageNumbers} setCurrentPage={setCurrentPage}/>
        </div>
    )
}