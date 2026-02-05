import bgImage from "../../assets/image.png";
import Button from "./Button";
import Msg from './ErrorMsg'
import { UserContext } from "./UserContext";
import { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    let navigate = useNavigate();
    function navigates(){
        navigate("/app/signIn");
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showMsg, setShowMsg] = useState(false);
    const [style, setStyle] = useState(false);
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const {user,changeUser} = useContext(UserContext);

    async function signup() {
        let data;
        const response = await fetch("/server/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password })
        })
        .then(res => res.json())
        .then(dat => data = dat);
      
        console.log(data);
      
        if (data.message === "User already exists") {
            setStyle(false);
            errorMsg("User Already Exist!!", "Go to SignIn");
        } else if (data.message === "Signup successful") {
            setStyle(true);
            errorMsg("Signup Successful!!", "U can SignIn");
            navigates();
        } else {
            setStyle(false);
            errorMsg("Server Error", "Try again later");
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
      
        signup();
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