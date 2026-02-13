import { useEffect, useState } from "react";
import { UserContext } from "../Login-SignIn/UserContext";
import { useContext } from "react";
import SuggestUser from "./SuggestUser";

export default function TopBar() {

    const { user } = useContext(UserContext);
    


    const [inputval, setInputval] = useState("");
    const [friends, setFriends] = useState([]);
    const [users, setUsers] = useState([]);
    const [showDiv,setShowDiv]=useState(false);
    useEffect(() => {
        //get my friends
        if (!user || !user.username) return;
        console.log("hi", user.username);
        const val = async () => fetch("/server/friends/allFriends", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: user.username })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            const cleaned = (data.result || []).map(r => r.users);
            setFriends(cleaned);
        })
            .catch((err) => {
                console.log(err);
            })

        let fun = async () => fetch("/server/friends/allUsers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: user.username })
        }).then((res) => {
            return res.json();
        }).then((data) => {
            const cleaned = (data.result || []).map(r => r.users);
            setUsers(cleaned);
        }).catch((err) => {
            console.log(err);
        })
        val();
        fun();

        console.log(users);
    }, [user.username]);
    useEffect(() => {
        console.log("friends updated", friends);
    }, [friends]);
    function searchFriend(e) {
        if(!e.target.value){
            setShowDiv(false);
        }
        else{
            setShowDiv(true)

            setInputval(e.target.value);
            console.log(e.target.value);
     
        }

    }
    const filterNameArray = users.filter((ele) => {
        return ele.username.toLowerCase().includes(inputval.toLowerCase());
    })


    return (
        <>
            <div id="socialTopBar">
            
                <h2>Social Hub</h2>
                <div style={{width:"30%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <input onChange={searchFriend} type="text" id="searchInSocial" placeholder="Search your friends or add friend..."></input>
                    

                </div>
            </div>
            <div style={{display:showDiv?"block":"none"}} id="dropdown">
                        {filterNameArray.map((ele) => {
                            const isFriend = friends.some(
                                friend => friend.username === ele.username
                            );

                            return (
                            
                                        <SuggestUser img={""} name={ele.username} bio={"hello"} isFriend={isFriend}></SuggestUser>

                            );
                        })}

                    </div>
        </>
    )
}