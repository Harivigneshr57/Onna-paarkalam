import TopBar from "./TopBar"
import PendingInvite from "./PendingInvite"
import AllFriends from "./AllFriends"

export default function SocialHub() {
    return (
        <>
            <div id="socialContainer">
                <div id="socialNavDiv"></div>
                <div id="socialMain">
                    <TopBar></TopBar>
                    <PendingInvite></PendingInvite>
                    <AllFriends></AllFriends>
                </div>
            </div>
        </>
    )
}