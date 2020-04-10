import React from "react";
import HomeContact from "../HomeContact/HomeContact";
import Main from '../Main/Main'
import ThreeCol from "../ThreeCol/index";
import Steps4 from '../Steps4/Steps4';
import AboutUs from '../AboutUs/AboutUs';
import Help from '../Help/Help'

  const Home =()=>{      
    return(
    <>
    <Main/>
    <ThreeCol/>
    <Steps4/>
    <AboutUs/>
    <Help/>
    <HomeContact/>
    </>
    )
}

export default Home;