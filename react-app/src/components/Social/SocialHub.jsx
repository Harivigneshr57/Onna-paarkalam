import TopBar from "./TopBar"
import PendingInvite from "./PendingInvite"
import AllFriends from "./AllFriends"
import SideBar from "../Home/SideBar"
import Chathead from "./Chathead"
import Chatmeassages from "./Chatmessages"
import './social.css'
import { useState } from "react"

export default function SocialHub() {
const[refresh,setRefresh]=useState(false);
const [currentUser,setUser]=useState(""); 
    const [chatBox,setchatBox]=useState(false);

    function handleUser(friend){
        setUser(friend);
        console.log("Hello "+friend);
    }

    function displayChat(){
        setchatBox(true);
    }

    function hideChat(){
        setchatBox(false);
    }

    return (
        <>
            <div id="socialContainer">
                <SideBar></SideBar>
                <div id="socialMain">
                    <TopBar></TopBar>
                    <div className="social-friends-column">
                    <PendingInvite onAcceptDone={() => setRefresh(!refresh)}></PendingInvite>
                    <AllFriends handleUser={handleUser} refresh={refresh} currentUser={currentUser} displayChat={displayChat} ></AllFriends>
                    </div>
                    <div className="chat" style={{display:chatBox?'block':'none'}} >
                        <Chathead hideChat={hideChat} currentUser={currentUser}></Chathead>
                        <div className="line" />
                        <Chatmeassages></Chatmeassages>
                    </div>
                </div>
            </div>
        </>
    )
}