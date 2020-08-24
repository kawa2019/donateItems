import React from 'react';
import { TypeHelp } from './TypeHelp';
import { Pagination } from './Pagination';

export const MainInfo = ({ introText, currentToShowArr, pageNumbers, setCurrentPage, currentPage }) => {
    return (
        <div className="mainInfo">
            <p className="introText">{introText}</p>
            <TypeHelp currentToShowArr={currentToShowArr} />
            <Pagination pageNumbers={pageNumbers} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}