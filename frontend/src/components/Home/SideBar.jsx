import logo from "../../assets/logo.png";
import Button from "../Login-SignIn/Button";
export default function SideBar(){
    return(
        <>
        <aside>
            <div className="logo flex">
                <img src={logo} alt="logo" />
            </div>
            <div className="main-nav">
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </div>
        </aside>
        </>
    )
}