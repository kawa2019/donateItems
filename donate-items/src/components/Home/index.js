import React from "react";
import HomeContact from "../HomeContact/homeContact";

import ThreeCol from "../ThreeCol/index";
import Core from '../Core/index';
import AboutUs from '../AboutUs/AboutUs';
import Help from '../Help/Help'

  const Home =()=>{  
    return(
    <>
    <ThreeCol/>
    <Core/>
    <AboutUs/>
    <Help/>
    <HomeContact/>
    </>
    )
}

export default Home;