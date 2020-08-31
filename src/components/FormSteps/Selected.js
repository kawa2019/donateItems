import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export const Selected = ({ setListOpen, listOpen, selected }) => {
    return (
        <div className="dd-header" onClick={() => setListOpen(!listOpen)}>
            <p className="dd-header-title">— wybierz —  {selected}</p>
            {listOpen
                ? <FontAwesomeIcon icon={faAngleUp} />
                : <FontAwesomeIcon icon={faAngleDown} />
            }
        </div>
    )
}