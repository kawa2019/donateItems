import React from 'react';
import {Link} from 'react-router-dom';

export const BtnForm = ({ btn, link="", value }) => {
    return (
        <>
            {!btn ? <input className="sendMessage" type="submit" value={value} />
                : <button className="sendMessage"><Link to={`/${link}`}>{value}</Link></button>
            }
        </>
    )
}