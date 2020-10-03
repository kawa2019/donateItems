import React from 'react';
import {Link} from 'react-router-dom'

export const CTA = ({text, link, loggedUser}) => {
    return (
        <button className="cta">
            {!link ? text :
                <Link to={!loggedUser ? "./login" : "./donateItemsForm"}>{text}</Link>}
        </button>)
}