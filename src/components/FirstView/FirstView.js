import React from "react";
export const FirstView = ({ decor, cta1, cta2 }) => {

  return (
    <section id="firstView">
      <div className="container">
        <div className="firstView_content">
          {decor}
          <div className="buttons">
            {cta1}
            {cta2}
          </div>
        </div>
      </div>
    </section>
  )
}

