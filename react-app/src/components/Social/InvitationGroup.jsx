import {useContext, useEffect, useState } from 'react';
import { UserContext } from '../Login-SignIn/UserContext';
import Invitation from './Invitation'

export default function InvitationGroup() {
    const { user } = useContext(UserContext);
    const [invitations, setInvitation] = useState([]);
    async function fetching(){
        if(!user) return;
        await fetch("/server/friends/reqFriends", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email })
    }).then((res) => {
        return res.json();
    }).then((data) => {
        return setInvitation(data.result || []);
    })
}
    
    useEffect(() => {
        if (!user) return;
    fetching();
    }, [user]);




    async function rejectInvitation(from_id) {
        const reject = await fetch("/server/friends/rejectRequest", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ from_id: from_id, to_id: user.id })
        });
        fetching();

    }
    async function acceptInvitation(from_id) {
        const reject = await fetch("/server/friends/acceptRequest", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ from_id: from_id, to_id: user.id })
        });
fetching();
    }
    return (
        <>
            {invitations.map((inv) => (
                <Invitation key={inv.id} userName={inv.username} email={inv.email} onReject={() => rejectInvitation(inv.id)} onAccept={() => { acceptInvitation(inv.id) }}></Invitation>

            )
            )}

        </>
    )
}