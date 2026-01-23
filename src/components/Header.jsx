import Button from "./Button";
import logo from "../assets/logo.png";
export default function Header(){
    return(
        <>
            <header className="flex1">
                 <div className="name flex">
                    <div className="logo flex">
                        <img src={logo} alt="logo" />
                    </div>
                    <h2>Onna <span style={{ color: "#517692" }}>Paarkalam</span></h2>
                 </div>
                 <div className="headbuttons flex">
                    <Button className="smallbutton"><i className="fa-solid fa-globe"></i> English</Button>
                    <Button className="smallbutton">Sign In</Button>
                 </div>
            </header>
        </>
    )
}