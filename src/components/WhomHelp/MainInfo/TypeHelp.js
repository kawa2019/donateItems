import React from 'react';

export const TypeHelp = ({currentToShowArr}) => {
    return (
        <>
            {currentToShowArr.map((toShow, index) => {
                return (
                    <div className="typeHelp" key={index}>
                        <div className="allInfo">
                            <p className="info_name">{toShow.name}</p>
                            <p className="info_aim">{toShow.aim}</p>
                        </div>
                        <p className="info_items">{toShow.items}</p>
                    </div>
                )
            })
            }
        </>
    )
}