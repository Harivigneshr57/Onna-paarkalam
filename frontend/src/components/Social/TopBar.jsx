export default function TopBar(){

    function addFriend(){
        
    }
    return(
        <>
        <div id="socialTopBar">
            <h2>Social Hub</h2>
            <div>
                <input type="text"id="searchInSocial" placeholder="Search friends or rooms ..."></input>
                <button onClick={addFriend}>Add Friend</button>
            </div>
        </div>
        </>
    )
}