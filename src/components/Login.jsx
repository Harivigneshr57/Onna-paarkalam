import bgImage from "../assets/image.png";
import Button from "./Button";
export default function Login(){
    return(
        <>
            <main className="main flex" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="login flex">
                    <h1>Watch Movies Together,<span style={{color:"#517692"}}><br/>Perfectly Synced</span></h1>
                    <h6>Host private rooms, share laughs in real-time, and experience premium cinema with friends anywhere.</h6>
                    <input type="email" placeholder="Enter Your Email" id="loginEmail" style={{width:"30rem"}}/>
                    <div className="loginPass flex">
                        <input type="password" placeholder="Enter Your Password" id="loginPassword" style={{width:"22rem"}}/>
                        <Button className="bigbutton">Get Started</Button>
                    </div>
                    <p>Ready to Start? Use for free</p>
                </div>
            </main>
        </>
    )
}