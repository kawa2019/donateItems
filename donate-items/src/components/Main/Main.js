import React from "react";
import { Link } from "react-router-dom"



export default function Main() {

  return (
    <main>
      <div className="container">
        <div className="intro">
          <div className="begin">
            <p className="titleOfBegin">Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</p>
            <span className="decoration"></span>
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

