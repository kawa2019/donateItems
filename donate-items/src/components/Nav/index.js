import React from "react";
import {Link} from 'react-router-dom'
//import {Link,Element} from 'react-scroll'
//import banner from "../../assets/images/Home-Hero-Image.jpg"
import Core from '../Core/index'

export default function Nav({Core}){
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
      <li><Link to={Core} smooth={true}>O co chodzi?</Link></li>
      <li>O nas</li>
      <li>Fundacje i organizacje</li>
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

