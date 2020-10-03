import React from 'react';
import {Decor} from '../Home/Decor';
import {DonateIntroSteps} from './DonateIntroSteps';

export const DonateIntro = () => {
    return (
        <div className="donateIntro">
            <Decor text="Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM"/>
            <DonateIntroSteps/>
        </div>
    )
} 