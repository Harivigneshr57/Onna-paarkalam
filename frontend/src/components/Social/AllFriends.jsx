import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from "../Login-SignIn/UserContext";
export function FriendPanel(){
    const { user } = useContext(UserContext);
    const{friends,setFriends}=useState([]);
    useEffect(() => {
        if (!user) return;
        fetch("https://onna-paarkalam-1.onrender.com/allfriends", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            return setFriends(data.result || []);
        })

    }, [user]);


    return(
        <>
        <div id="friendsPanel">
            {/* {friends.map((friend)=>(
                <MyFriend key={friend.id} img={friend.img} name={friend.username} email={friend.email}></MyFriend>
            ))} */}
        </div>
        </>
    )
}
export function MyFriend(props){
    return(
        <>
        <div className="myFriend">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <p>{props.email}</p>
            <div id="invOrchat">
                <button id="inviteToWatch" onClick={props.inviteToWatch}>INVITE TO WATCH</button>
                <button id="chat">🗨️</button>
            </div>
        </div>
        </>
    )
}
export default function AllFriends(){
    return(
        <>
        <div id="allFriendsBox">
            <div id="headOfAllFr">
                <h3>ALL FRIENDS</h3>
            </div>
            <div>
                <FriendPanel></FriendPanel>
            </div>
        </div>
        </>
    )
}
