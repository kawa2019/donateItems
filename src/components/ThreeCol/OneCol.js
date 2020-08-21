import React from 'react';

export const OneCol = ({col}) => {
    return (
        <div className="one_col">
            <span className="one_colNum">{col.num}</span>
            <span className="one_colKind">{col.kind}</span>
            <p className="one_colText">{col.text}</p>
        </div>
    )
} 