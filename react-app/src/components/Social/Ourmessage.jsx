function Ourmessage(props) {
    return <>
        <div className="chat-row">
            <div className="chat-our-message">
                <p>{props.message}</p>
            </div>
        </div>
    </>
}

export default Ourmessage;