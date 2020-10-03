import React from 'react';
import {OneCol} from './OneCol';


export const ThreeColAll = ({threeColArr}) => {
    return (
        <div className="container three_colStatistics">
            {threeColArr.map((col, index) => {
                return (
                    <OneCol col={col} key={index}/>
                )
            })}
        </div>
    )
}