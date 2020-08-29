import React from 'react';

export const DonateIntroSteps = () => {
    const steps4Arr = ["Wybierz rzeczy", "Spakuj je w worki", "Wybierz fundację", "Zamów kuriera"]
    return (
        <>
            <p className="introText">Wystarczą 4 proste kroki:</p>
            {steps4Arr.map((step, index) => {
                return (
                    <div className="steps4OneSquare">
                        <span className="stepNum">{index + 1}</span>
                        <p className="stepName">{step}</p>
                    </div>
                )
            })}
        </>
    )
}