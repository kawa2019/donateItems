import React from "react";
import { ThreeColAll } from './ThreeColAll';

export const ThreeColumns = () => {

   const threeColArr = [{ num: 10, kind: "ODDANYCH WORKÓW", text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." },
   { num: 5, kind: "WSPARTYCH ORGANIZACJI", text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." },
   { num: 7, kind: "ZORGANIZOWANY ZBIÓREK", text: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." }]
   return (
      <section className="three_col">
         <ThreeColAll threeColArr={threeColArr} />
      </section>
   )
}