import { use, useState } from "react"
import InteractiveFeatures from "./InteractiveFeatures";
import Stage from "./Stage";
import MiniGame from "./MiniGame";
import Button from '../Login-SignIn/Button'
import toast from "react-hot-toast";
export default function ConfigMovie({step,onStep}){
    const [audio,setAudio] = useState(false);
    const [video,setVideo] = useState(false);
    const [reaction,setReaction] = useState(false);
    const [chat,setChat] = useState(false);
    const [game,setGame] = useState(false);
    const [room,setRoom] = useState('');
    const toastErrorStyle = {
        style: {
          borderRadius: "1rem",
          background: "var(--error)",
          color: "white",
          fontWeight: 600,
          minWidth: "26rem",   
        },
        iconTheme: {
            fontWeight: 600,
          secondary: "var(--white)",
        },
      };
      
    function check(){
        if(room.length < 5 ){
            toast.error("Room Name Should Contain AtLeast 5 Char !!",toastErrorStyle)
        }
        else{
            onStep(3); 
        }
    }
    return(
        <>
        <div className="config">
            <div className="back">
                <i class="fa-solid fa-arrow-left" onClick={()=>onStep(1)}></i>
                <p>BACK TO MOVIE SELECTION</p>
            </div>
            <h1>Advanced Configuration</h1>
            <Stage step={step}></Stage>
            <div className="configurations">
                <h6>Room Name</h6>
                <input type="text" name="roomName" id="roomName" value={room} onChange={(e)=>setRoom(e.target.value)    } placeholder="Enter Your Room Name" />
                <InteractiveFeatures video={video} audio={audio} chat={chat} reaction={reaction} setAudio={setAudio} setVideo={setVideo} setChat={setChat} setReaction={setReaction}></InteractiveFeatures>
                <MiniGame game={game} setGame={setGame}></MiniGame>
            </div>
            <Button id='inviteFriends' onClick={check}>Continue to Invite Friends    <i class="fa-solid fa-arrow-right"></i></Button>
        </div>
        </>
    )
}