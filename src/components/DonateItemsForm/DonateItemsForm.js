import React from 'react';
import { Link } from 'react-router-dom'
import Steps4 from '../Steps4/Steps4';

export default function DonateItemsForm() {
    return (
        <main id="mainForm">
            <div className="container">
                <div className="intro">
                    <div className="begin">
                        <p className="titleOfBegin">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</p>
                        <span className="decoration"></span>
                        <p className="titleOfBegin titleOfBegin4">Wystarczą 4 proste kroki:</p>
                        <div className="steps4">
                            <div className="steps4One">
                                <span>1</span>
                                <p>Wybierz rzeczy</p>
                                <div className="toRotateSteps4"></div>
                            </div>
                            <div className="steps4One">
                                <span>2</span>
                                <p>Spakuj je w worki</p>
                                <div className="toRotateSteps4"></div>
                            </div>
                            <div className="steps4One">
                                <span>3</span>
                                <p>Wybierz fundację</p>
                                <div className="toRotateSteps4"></div>
                            </div>
                            <div className="steps4One">
                                <span>4</span>
                                <p>Zamów kuriera</p>
                                <div className="toRotateSteps4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}