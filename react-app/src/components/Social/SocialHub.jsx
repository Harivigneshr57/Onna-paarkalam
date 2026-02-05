import TopBar from "./TopBar"
import PendingInvite from "./PendingInvite"
import AllFriends from "./AllFriends"
import SideBar from "../Home/SideBar"
import './social.css'

export default function SocialHub() {
    return (
        <>
            <div id="socialContainer">
                <SideBar></SideBar>
                <div id="socialMain">
                    <TopBar></TopBar>
                    <PendingInvite></PendingInvite>
                    <AllFriends></AllFriends>
                </div>
            </div>
        </>
    )
}