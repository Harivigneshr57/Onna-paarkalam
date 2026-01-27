import bgImage from "../../assets/image.png";
import Button from "./Button";
import Msg from './ErrorMsg'
import { useState } from "react";
export default function Login(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showMsg, setShowMsg] = useState(false);
    const [style, setStyle] = useState(false);
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    async function login() {
        const response = await fetch("http://localhost:3456/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              password
            })
          });
      
          const data = await response.json();
          console.log(data);
      
          if(data.message == "User already exist"){
            setStyle(false);
            errorMsg("User Already Exist!!", "Go to SignIn");
          } else if(data.message == "user inserted"){
            setStyle(true);
            errorMsg("Login Successful!!","Go to SignIn")
          }
          else{
            setStyle(false);
            errorMsg("Server Busy!!","Please try Later")
          }
    }

    function loginCheck() {
        if (name.length === 0) {
            setStyle(false);
            errorMsg("Enter Name!!", "Name should not be Empty");
            return;
        }
      
        if (!/^[A-Za-zs]+$/.test(name)) {
            setStyle(false);
            errorMsg("Invalid Name!!", "Only letters allowed");
            return;
        }
      
        if (email.length < 13) {
            setStyle(false);
            errorMsg("Invalid Email!!", "Email should contain 13 letters minimum");
            return;
        }
      
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStyle(false);
            errorMsg("Invalid Email!!", "Enter a valid Email address");
            return;
        }
      
        if (password.length < 6) {
            setStyle(false);
            errorMsg("Weak Password!!", "Password must be at least 6 characters");
            return;
        }
      
        login();
      }
      

    function errorMsg(title,error){
        setTitle(title);
        setError(error);
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 2000);
    }

    return(
        <>
            <main className="main flex" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="login flex">
                    <h1>Watch Movies Together,<span style={{color:"#517692"}}><br/>Perfectly Synced</span></h1>
                    <h6>Host private rooms, share laughs in real-time, and experience premium cinema with friends anywhere.</h6>
                    <input type="text" placeholder="Enter Your Name" id="loginName" style={{width:"30rem"}}  value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder="Enter Your Email" id="loginEmail" style={{width:"30rem"}} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className="loginPass flex">
                        <input type="password" placeholder="Enter Your Password" id="loginPassword" style={{width:"25rem"}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <Button className="bigbutton" onClick={loginCheck} id="signUp">Login</Button>
                    </div>
                    <p>Ready to Start? Use for free</p>
                </div>
            </main>
            <Msg show={showMsg} title={title} error={error} style={style}></Msg>
        </>
    )
} 