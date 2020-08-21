import React from "react";
import { Decor } from './Decor';
import { CTA } from './CTA';
import HomeContact from "../HomeContact/HomeContact";
import { Main } from '../Main/Main'
import {ThreeColumns} from "../ThreeCol/index";
import Steps4 from '../Steps4/Steps4';
import AboutUs from '../AboutUs/AboutUs';
import Help from '../Help/Help'

export const Home = () => {
    const decorText = <>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</>
    const textBtnMain = { text1: <>ODDAJ<br/>RZECZY</>, text2: "ZORGANIZUJ ZBIÓRKĘ" }
    return (
        <>
            <Main decor={<Decor text={decorText} />} cta1={<CTA text={textBtnMain.text1} />} cta2={<CTA text={textBtnMain.text2} />} />
            <ThreeColumns />
            <Steps4 />
            <AboutUs />
            <Help />
            <HomeContact />
        </>
    )
}