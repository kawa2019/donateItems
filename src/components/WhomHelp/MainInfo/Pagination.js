import React from 'react';

export const Pagination=({pageNumbers, setCurrentPage})=>{
    return(
        <div className="pagination">
        {pageNumbers.map(number => {
            return (
                <span
                    className="page"
                    key={number}
                    id={number}
                    onClick={e => setCurrentPage(e.target.id)}
                >
                    {number}
                </span>
            );
        })}
    </div>
    )
}