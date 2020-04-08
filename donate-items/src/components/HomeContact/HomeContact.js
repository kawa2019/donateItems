import React, { useState } from "react";
//import logo from "../../assets/images/Background-Contact-Form.jpg";
import fb from "../../assets/images/Facebook.svg";
import insta from "../../assets/images/Instagram.svg"

export default function HomeContact(){
      const [name,setName] = useState("")         
      const [email,setEmail] = useState("")     
      const [text,setText] = useState("")
      const [errorName,setErrorName] = useState("")
      const [errorEmail,setErrorEmail] = useState("")         
      const [errorText,setErrorText] = useState("")  
      const [validateSucess,setValidateSucess] = useState("")  
      
      const validateEmail= (email)=>{
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase())}

        const myBorder = (error) => {
            let style = {}
            if (error) {
                return style = {
                    borderBottom: "1px solid red"
                }
            }
        }  
      
      const handleForm=(e)=>{
        e.preventDefault();

        setErrorName('');
        setErrorEmail("");
        setErrorText("")
        setValidateSucess("")
        
        if (name.length == 0 || name.includes(" ")) {
            setErrorName('Podane imię jest nieprawidłowe');      
        }

        
        if (!validateEmail(email) || email.length == 0) {
            setErrorEmail('Podane email jest nieprawidłowe');      
        }

        if (text.length < 120) {
            setErrorText('Wiadomość musi mieć conajmniej 120 znaków!');     
        }
        
        if (name || text || email){
            setValidateSucess("Wiadomość została wysłana! Wkrótce się skontaktujemy.")
        }
        
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",{
            method: "POST",
            body: JSON.stringify({name,email,message: text}),
            headers: {
              "Content-Type": "application/json"
            }})
        .then(res=>res.json())
        .then(response=>{console.log(response)})
             
    }


    
    return(
        <>
       <footer id="footer">
        <div className="container-opacity">
        <div className="container-general">  
        <form onSubmit={handleForm}>
            <div className="headerFoot">
            <p className="contactTitle">Skontaktuj się z nami</p>
            <span className="main_dec">            
            </span>
            </div>
            {validateSucess && <p className="validateSucess">{validateSucess}</p>}
            <div className="group_nick sameLabel" style={myBorder(errorName)}>
            <label>Wpisz swoje imię</label>
            <input type="text" placeholder="Krzysztof" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="group_nick sameLabel email" style={myBorder(errorEmail)}>
            <label>Wpisz swój email</label>
            <input type="email" placeholder="abc@xyz.pl" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            {errorName && <p style={{color: "red",display:"inline-block"}}>{errorName}</p>}
            {errorEmail && <p style={{color: "red",display:"inline-block",marginLeft:"5rem"}}>{errorEmail}</p>}
            <div className="group_text sameLabel" style={myBorder(errorText)}>
            <label>Wpisz swoją wiadomość</label>         
            <textarea  value={text} onChange={(e)=>setText(e.target.value)}
             placeholder ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor laboris nisi ut aliquip ex ea commodo consequat."/>
            </div>
            {errorText && <p style={{color: "red"}}>{errorText}</p>}
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