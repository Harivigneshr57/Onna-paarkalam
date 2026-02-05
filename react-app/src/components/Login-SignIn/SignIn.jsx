import bgImage from "../../assets/image.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState,useContext } from "react";
import Msg from "./ErrorMsg";
import { UserContext } from "./UserContext";

export default function SignIn() {
    const [username,setName] = useState('');
    const [password,setPassword] = useState('');
    const [showMsg, setShowMsg] = useState(false);
    const [style, setStyle] = useState(false);
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const {user,changeUser} = useContext(UserContext);
    async function signIn() {
        console.log("Hiii");
        let data;
        try {
          const response = await fetch(
            "/server/auth/signin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username,
                password
              })
            }
          )
          .then(res => res.json())
          .then(dat => data = dat);
        console.log(data);
      
          console.log("Signin response:", data);
      
          if (data.message == "User not found") {
            setStyle(false);
            errorMsg("LOGIN FAILED!!","User not found");
            return;
          }
          if(data.message == "Invalid password"){
            setStyle(false);
            errorMsg("LOGIN FAILED!!","Invalid Password")
            return
          }
          if(data.message == "Login successful"){
            setStyle(true);
            changeUser(data.id,data.username);
            errorMsg("Login Successful!!","");
            home();
          }
          else{
            setStyle(false);
            errorMsg("Server Error","Try Again Later")
          }
      
        } catch (err) {
            setStyle(false);
            errorMsg("Server Error","Try Again Later")
        }
      }

    function errorMsg(title,error){
        setTitle(title);
        setError(error);
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 2000);
    }
      
    let navigate = useNavigate();
    function navigates(){
        navigate("/app/");
    }
    function home(){
        navigate("/app/home");
    }
    function signInCheck(){
        if(username.length == 0){
            setStyle(false);
            errorMsg("Invalid Email!!","Email Required");
            return;
        }
        else if(password.length == 0){
            setStyle(false);
            errorMsg("Invalid Password!!","Password Required");
            return;
        }
        signIn();
    }
    return (
        <>
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
                    <label>UserName</label>
                    <input type="text" placeholder="Enter Your UserName" id="signInEmail" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="********" id="signInPass" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <Button className="login-btn" id="login-btn" onClick={signInCheck}>Sign In</Button>
                <p className="new-user">New here? <span id="join" onClick={navigates}>Join the club</span></p>
            </div>
        </main>
        <Msg show={showMsg} title={title} error={error} style={style}></Msg>
        </>
    );
}
