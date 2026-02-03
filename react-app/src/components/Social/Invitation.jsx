export default function Invitation(props) {
    return (
        <>
            <div>
                <div>
                    <div><img src={props.img}/></div>
                    <div>
                        <h3>{props.userName}</h3>
                        <p>{props.email}</p>
                    </div>

                </div>
                <div>
                    <button id="reject-btn" onClick={props.onReject}>✖</button>
                    <button id="accept-btn" onClick={props.onAccept}>✔</button>
                </div>
            </div>

        </>
    )
}