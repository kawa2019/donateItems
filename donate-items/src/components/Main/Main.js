import React from "react";
import {Link} from "react-router-dom"



export default function Main(){
    return (
    <main> 
      <div className="container cont">
     
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
    </main>
    )
}

