import TopBar from "../Social/TopBar"
import PendingInvite from "../Social/PendingInvite"
import AllFriends from "../Social/AllFriends"

export default function SocialHub() {
    return (
        <>
            <div id="socialContainer">
                <div id="socialNavDiv"></div>
                <div id="socialMain">
                    <TopBar></TopBar>
                    <PendingInvite></PendingInvite>
                    <AllFriends></AllFriends>
                    <AllFriend></AllFriend>
                </div>
            </div>
        </>
    )
}