import React from "react";


export default function HomeContact(){
    return(
        <>
       <footer>
           
        <div className="headerFoot">
        <p>Skontaktuj się z nami</p>
        <span>
            
        </span>
        </div>
        <form>
            <div className="group_nick sameLabel">
            <label>Wpisz swoje imię</label>
            <input type="text" placeholder="Krzysztof"/>
            </div>
            <div className="group_nick sameLabel email">
            <label>Wpisz swój email</label>
            <input type="email" placeholder="abc@xyz.pl"/>
            </div>
            <div className="group_text sameLabel">
            <label>Wpisz swoją wiadomość</label>         
            <textarea placeholder ="Lorem ipsum dolor sit amet, consectetur   magna aliqua.  veniam, quis nostrud exercitation ullamco laboris nisi ut ."/>
            </div>
            <input className="sendMessage" type="submit" value="Wyślij"/>
        </form>
        
        </footer>
        </>
    )
}