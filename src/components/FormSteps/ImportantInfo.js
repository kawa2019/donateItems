import React from 'react';

export const ImportantInfo = ({text}) => {
    return (
        <header className="importantInfo">
            <span className="important">Ważne!</span>
            <p className="importantText">{text}</p>
        </header>
    )
}