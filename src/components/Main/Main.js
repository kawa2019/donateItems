import React from "react";
import { Link } from "react-router-dom"



export const Main = ({ decor, cta1, cta2 }) => {

  return (
    <main>
      <div className="container">
        <div className="main_content">
          {decor}
          <div className="buttons">
            {cta1}
            {cta2}
          </div>
        </div>
      </div>
    </main>
  )
}

