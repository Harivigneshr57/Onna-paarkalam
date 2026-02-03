import InvitationGroup from './InvitationGroup'
export default function PendingInvite() {

    return (
        <>
            <div id="pendingInviteDiv">
                <div id="pendingTop">
                    <h3>Pending Requests</h3>

                </div>
                <div id="pendingMain">
                    <InvitationGroup></InvitationGroup>
                </div>
            </div>
        </>
    )
}
