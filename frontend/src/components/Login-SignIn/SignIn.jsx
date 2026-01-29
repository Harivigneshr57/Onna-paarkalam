import bgImage from "../../assets/image.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";



export default function SignIn() {
    const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
function signIn(){
    if(email == 0){
        
    }
}
    let navigate = useNavigate();
    function navigates(){
        navigate("/");
    }
    return (
        <main className="login-page flex" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="top-logo flex">
                <img src={logo} alt="Onna Paarkalam Logo" style={{width:"4rem"}} />
                <h2>Onna <span style={{ color: "#517692" }}>Paarkalam</span></h2>
            </div>
            <div className="login-card">
                <div className="center-logo">
                    <img src={logo} alt="logo" />
                </div>
                <h2>Welcome Back</h2>
                <p>Sign in to join the watch party</p>
                <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="********" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <Button className="login-btn" id="login-btn" onClick={signIn}>Sign In</Button>
                <p className="new-user">New here? <span id="join" onClick={navigates}>Join the club</span></p>
            </div>
        </main>
    );
}
