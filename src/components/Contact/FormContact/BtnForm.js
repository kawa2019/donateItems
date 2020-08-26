import React from 'react';
import {Link} from 'react-router-dom';

export const BtnForm = ({ btn, link, value }) => {
    console.log(link)
    return (
        <>
            {!btn ? <input className="sendMessage" type="submit" value={value} />
                : <button className="sendMessage"><Link to={`/${link}`}>{value}</Link></button>
            }
        </>
    )
}