import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export const Selected = ({ setListOpen, listOpen, selected, error }) => {
    return (
        <div className={!error ? "dd-header" : "dd-header errorData"} onClick={() => setListOpen(!listOpen)}>
            <p className="dd-header-title">{selected}</p>
            {listOpen
                ? <FontAwesomeIcon icon={faAngleUp} />
                : <FontAwesomeIcon icon={faAngleDown} />
            }
        </div>
    )
}