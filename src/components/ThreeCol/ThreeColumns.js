import React from "react";
import { OneCol } from './OneCol';

export const ThreeColumns = () => {

   const threeColArr = [{ num: 10, kind: "ODDANYCH WORKÓW", text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." },
   { num: 5, kind: "WSPARTYCH ORGANIZACJI", text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." },
   { num: 7, kind: "ZORGANIZOWANY ZBIÓREK", text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." }]
   return (
      <section className="three_col">
         <div className="container three_colStatistics">
            {threeColArr.map((col, index) => {
               return (
                  <OneCol col={col} key={index} />
               )
            })}
         </div>
      </section>
   )
}