import React from "react";
import {Decor} from './Decor';
import {CTA} from './CTA';
import {Contact} from "../Contact/Contact";
import {FirstView} from '../FirstView/FirstView';
import {ThreeColumns} from "../ThreeCol/ThreeColumns";
import {Steps4} from '../Steps4/Steps4';
import {AboutUs} from '../AboutUs/AboutUs';
import {WhomHelp} from '../WhomHelp/WhomHelp';

export const Home = ({loggedUser}) => {
    const decorTextMain = <>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</>
    const decorTextSteps4 = "Wystarczą 4 proste kroki"
    const textBtn = {text1: <>ODDAJ<br/>RZECZY</>, text2: "ZORGANIZUJ ZBIÓRKĘ"}

    return (
        <>
            <FirstView decor={<Decor text={decorTextMain}/>}
                       cta1={<CTA text={textBtn.text1} link loggedUser={loggedUser}/>}
                       cta2={<CTA text={textBtn.text2}/>}/>
            <ThreeColumns/>
            <Steps4 decor={<Decor text={decorTextSteps4}/>}
                    cta1={<CTA text={textBtn.text1} link loggedUser={loggedUser}/>}/>
            <AboutUs decor={<Decor text="O nas"/>}/>
            <WhomHelp decor={<Decor text="Komu pomagamy?"/>}/>
            <Contact decor={<Decor text="Skontaktuj się z nami"/>}/>
        </>
    )
}