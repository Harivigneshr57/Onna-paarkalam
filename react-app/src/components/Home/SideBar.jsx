import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Login-SignIn/Button";
export default function SideBar(){
    let navigate = useNavigate();
    function social(){
        navigate("/app/social");
    }
    function home(){
        navigate("/app/home")
    }
    function profile(){
        navigate("/app/profile")
    }
    function discover(){
        navigate("/app/discover")
    }
    function room(){
        navigate("/app/room")
    }
    return(
        <>
        <aside>
            <div className="logo flex">
                <img src={logo} alt="logo" />
            </div>
            <div className="main-nav">
                <Button icon={<i class="fa-solid fa-house"></i>} onClick={home}>Home</Button>
                <Button icon={<i class="fa-solid fa-compass"></i>} onClick={discover}>Discover</Button>
                <Button icon={<i class="fa-solid fa-users"></i>} onClick={social}>Social</Button>
                <Button icon={<i class="fa-solid fa-door-open"></i> } onClick={room}>Room</Button>
            </div>
            <div className="user-nav">
                <Button icon={<i class="fa-solid fa-circle-user"></i>} onClick={profile}>Profile</Button>
                <Button icon={<i class="fa-solid fa-gear"></i>}>Settings</Button>
            </div>
        </aside>
        </>
    )
}