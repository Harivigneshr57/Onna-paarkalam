import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from "../Login-SignIn/UserContext";
import def from "../../assets/onnapak.png";


export function FriendPanel({ currentUser, handleUser, displayChat,refresh }) {


    const { user } = useContext(UserContext);
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        if (!user) return;
        fetch("/server/friends/allFriends", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: user.username })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log("==================================");

            // console.log(data.result[0]);
            console.log("==================================");
            console.log(data);
            console.log("==================================");

            return setFriends(data.result || []);
        })
    }, [user, refresh]);

    useEffect(() => {
        if (!user) return;
        fetch("server/friends/allFriends", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            return setFriends(data.result || []);
        })

    }, [user]);

    return (
        <>
            <div id="friendsPanel">
                {friends.map((friend) => (
                    <MyFriend img={friend.users.img} name={friend.users.username} bio={friend.users.bio} handleUser={handleUser} key={currentUser}   displayChat={displayChat}></MyFriend>
                ))}
            </div>
        </>
    )
}


export function MyFriend(props) {



    return (
        <>
            <div className="myFriend">
                <img src={props.img ? props.img : def} id=''/>
                <h3>{props.name}</h3>
                <p style={{ color: "#5a83a3" }}>{props.bio}</p>
                <div id="invOrchat">
                    <button id="inviteToWatch" onClick={props.inviteToWatch}>INVITE TO WATCH</button>
                    <button id="chat" onClick={() => { props.displayChat(); props.handleUser(props.name) }}><i className="fa-solid fa-message"></i></button>
                </div>
            </div>
        </>
    )
}
export default function AllFriends({ currentUser, handleUser, displayChat, refresh }) {
    return (
        <>
            <div id="allFriendsBox">
                <div id="headOfAllFr">
                    <h3>All Friends</h3>
                </div>
                <div className='social-allfriends-panel'>
                    <FriendPanel refresh={refresh} currentUser={currentUser} handleUser={handleUser} displayChat={displayChat}></FriendPanel>
                </div>
            </div>
        </>
    )
}
