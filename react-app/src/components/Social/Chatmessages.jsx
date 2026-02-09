import { useState } from "react";
import Ourmessage from "./Ourmessage";

function Chatmeassages() {
    const [messageinput, setMessage] = useState("");
    const [messagearray, setArray] = useState([]);

    function handleinput(e) {
        setMessage(e.target.value);
    }

    function addtoArray() {
        if (messageinput.trim() === "") return;
        setArray([...messagearray, messageinput]);
        setMessage("");
    }

    return <>
        <div className="chat-message-section">
            <div className="chat-meassages">
                <div className="chat-messages-child" style={{display:"flex",gap:"2rem",flexDirection: "column"}}>
                    {messagearray.map((msg, index) => (
                        <Ourmessage key={index} message={msg} />
                    ))}
                </div>
            </div>
            <div className="chat-messaging">
                <input type="text" placeholder="Type your message here.." id="message-input" onChange={handleinput} autoComplete="off" />
                <button id="chat-send" onClick={addtoArray}><i className="fa-solid fa-paper-plane" id="send-message"></i></button>
            </div>
        </div>
    </>
}

export default Chatmeassages;