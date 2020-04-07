import React from "react";
import {Link} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'



export default function Nav(){
    return (
    <header> 
      <div className="container cont">
     <nav>
      <div>             
      <ul className="user">
          <li><Link to="/login">Zaloguj</Link></li>
          <li><Link to="/register">Zarejestruj się</Link></li>
      </ul>
      <ul className="menu">
      <li>Start</li>
      <li><ScrollLink to="core" smooth={true} duration={1200}>O co chodzi?</ScrollLink></li>
      <li><ScrollLink to="aboutUs" smooth={true} duration={1200}>O nas</ScrollLink></li>
      <li><ScrollLink to="toHelp" smooth={true} duration={1200}>Fundacje i organizacje</ScrollLink></li>
      <li>Kontakt</li>
      </ul>
      </div>
      </nav>
      <div className="intro">
          <div className="begin">        
          <p>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</p>
          <span></span>
          <div className="buttons">
          <button><Link to="/login">ODDAJ RZECZY</Link></button>
          <button><Link to="/login">ZORGANIZUJ ZBIÓRKĘ</Link></button>
          </div>
          </div>
      </div>
      </div>
    </header>
    )
}

