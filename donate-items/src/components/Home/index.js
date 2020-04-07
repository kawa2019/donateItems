import React from "react";
import HomeContact from "../HomeContact/index";
import Nav from "../Nav/index";
import ThreeCol from "../ThreeCol/index";
import Core from '../Core/index';
import AboutUs from '../AboutUs/AboutUs';
import Help from '../Help/Help'

  const Home =()=>{  
    return(
    <>
    <Nav/>
    <ThreeCol/>
    <Core/>
    <AboutUs/>
    <Help/>
    <HomeContact/>
    </>
    )
}

export default Home;