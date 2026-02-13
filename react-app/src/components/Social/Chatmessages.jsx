import { useState, useEffect } from "react";
import Ourmessage from "./Ourmessage";
import { io } from "socket.io-client";

// import "../../../../functions/Chats/index.js";

const socket = io("http://localhost:8002");

function Chatmeassages(props) {
    const [messageinput, setMessage] = useState("");
    const [messagearray, setArray] = useState([]);
    const [currentUser, setUser] = useState("");
    
    useEffect(() => {
        let username = localStorage.getItem("Username");
    
        socket.on("sending-socketId", (id) => {
            console.log("Socket Id " + id);
            socket.emit("addtoserver", username, id);
        });
    
        socket.on("privatemessage", (msg, friend) => {
            setArray((prev) => [
                ...prev,
                { role: "friend", message: msg }
            ]);
        });
    
        setUser(username);
        socket.emit("giveid");
    
        return () => {
            socket.off("sending-socketId");
            socket.off("privatemessage");
        };
    
    }, []);
    

    const sendMessage = (friend) => {
        setArray((prev) => [...prev,{role:"our",message:messageinput}]);
        socket.emit("one2one", messageinput,friend);
        setMessage("");
    };
    
    return <>
        <div className="chat-message-section">
            <div className="chat-meassages">
                <div className="chat-messages-child" style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
                    {messagearray.map((msgobject, index) => (
                        <Ourmessage key={index} message={msgobject.message} role={msgobject.role}/>
                    ))}
                </div>
            </div>
            <div className="chat-messaging">
                <input type="text" placeholder="Type your message here.." id="message-input" onChange={(e) => setMessage(e.target.value)} autoComplete="off" value={messageinput} />
                <button id="chat-send" onClick={()=>{sendMessage(props.currentUser)}}><i className="fa-solid fa-paper-plane" id="send-message"></i></button>
            </div>
        </div>
    </>
}

export default Chatmeassages;