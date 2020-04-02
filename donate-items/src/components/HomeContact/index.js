import React from "react";
//import logo from "../../assets/images/Background-Contact-Form.jpg";
import fb from "../../assets/images/Facebook.svg";
import insta from "../../assets/images/Instagram.svg"

export default function HomeContact(){
    return(
        <>
       <footer>
        <div className="container-opacity">
        <div className="container-general">  
        <form>
            <div className="headerFoot">
            <p>Skontaktuj się z nami</p>
            <span>            
            </span>
            </div>
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
            <textarea placeholder ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laboris nisi ut aliquip ex ea commodo consequat."/>
            </div>
            <input className="sendMessage" type="submit" value="Wyślij"/>
        </form>
        <div className="copyright">
            <p>Copyright by Coders Lab</p>
            <span>
            <img src={fb}/>
            <img src={insta}/>
            </span>
        </div>
        </div>
        </div>
        </footer>
        </>
    )
}