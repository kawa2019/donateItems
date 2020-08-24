import React from 'react';

export const Pagination=({pageNumbers, setCurrentPage, currentPage})=>{
    const pageBorder = (index) => {
        if (currentPage === index+1) {
            return "page pageBorder"
        } else{
            return "page"
        }
    }
    return(
        <div className="pagination">
        {pageNumbers.map((number,index) => {
            return (
                <span
                    className={pageBorder(index)}
                    key={number}
                    id={number}
                    onClick={e => setCurrentPage(+e.target.id)}
                >
                    {number}
                </span>
            );
        })}
    </div>
    )
}