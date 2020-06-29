import React from 'react';
import t_shirt from "../../assets/images/Icon-1.svg"
import pack from "../../assets/images/Icon-2.svg"
import search from "../../assets/images/Icon-3.svg"
import circle from "../../assets/images/Icon-4.svg"

import {Link} from "react-router-dom"

export default function Steps4(){
    return (
        <section className="steps" id="core">
            <div className="container">
               <div className="headerFoot">
               <p>Wystarczą 4 proste kroki</p>
               <span className="main_dec">            
               </span>
               </div>
              
               <div className="allSteps">
                 <div className="oneOfSteps">
                     <img src={t_shirt}/>
                     <p className="head">Wybierz rzeczy</p>
                     <p className="headText">ubrania, zabawki, sprzęt i inne</p>
                 </div>
                 <div className="oneOfSteps">
                     <img src={pack}/>
                     <p className="head">Spakuj je</p >
                     <p className="headText">skorzystaj z worków na śmieci</p>
                 </div>
                 <div className="oneOfSteps">
                     <img src={search}/>
                     <p className="head">Zdecyduj komu chcesz pomóc</p >
                     <p className="headText">wybierz zaufane miejsce</p>
                 </div>
                 <div className="oneOfSteps">
                     <img src={circle}/>
                     <p className="head">Zamów kuriera</p>
                     <p className="headText">kurier przyjedzie w dogodnym terminie</p>
                 </div>
               </div>
               
               <button><Link to="/login">ODDAJ RZECZY</Link></button>
            </div>
        </section>
    )
}