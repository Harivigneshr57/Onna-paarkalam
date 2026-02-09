import { useState } from "react"
import SideBar from "../Home/SideBar"
import ConfigMovie from "./ConfigMovie";
import InviteMovie from "./InviteMovie";
import SelectMovie from "./SelectMovie";
import SelectedMovie from "./SelectedMovie";
import './room.css';
export default function Room(){
    const [step,setStep] = useState(1);
    const [movie,setMovie] = useState('');
    return (
        <>
            <div id="room flex">
                <SideBar></SideBar>
                {step==1?<SelectMovie onStep={setStep} onMovie={setMovie} step={step}></SelectMovie>:step==2?<ConfigMovie onStep={setStep} step={step}></ConfigMovie>:<InviteMovie onStep={setStep} step={step}></InviteMovie>}
                <SelectedMovie movie={movie}></SelectedMovie>
            </div>
        </>
    )
}