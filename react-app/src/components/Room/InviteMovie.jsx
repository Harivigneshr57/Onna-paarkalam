import Stage from "./Stage"
import InviteCode from "./CodeInvite"
import InviteFriends from "./InviteFriends"
import Button from "../Login-SignIn/Button"
export default function InviteMovie({onStep,step}  ){
    return(
        <>
            <div className="config">
                <div className="back">
                    <i class="fa-solid fa-arrow-left" onClick={()=>onStep(2)}></i>
                    <p>BACK TO CONFIGURATION</p>
                </div>
                <h1>Invite Participants</h1>
                <Stage step={step}></Stage>
                <div className="configurations">
                    <InviteCode></InviteCode>
                    <InviteFriends></InviteFriends>
                </div>
                <Button id={'start'}>Start Watch Party <i class="fa-solid fa-caret-right"></i></Button>
            </div>
        </>
    )
}