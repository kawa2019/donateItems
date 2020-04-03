import React from "react";
import HomeContact from "../HomeContact/index";
import Nav from "../Nav/index";
import ThreeCol from "../ThreeCol/index";
import Core from '../Core/index'
import {Element} from "react-scroll"

  const Home =()=>{  
    return(
    <>
    <Nav core={Core}/>
    <ThreeCol/>
    <Core/>
    <HomeContact/>
    </>
    )
}

export default Home;