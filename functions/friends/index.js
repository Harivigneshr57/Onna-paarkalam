const catalyst = require("zcatalyst-sdk-node");


module.exports = async (req, res) => {

	let body = "";

	req.on("data", chunk => {
		body += chunk;
	});

	req.on("end", async () => {
		try {
			const data = JSON.parse(body || "{}");
			const { username,friendname } = data;
			console.log(username);
			const app = catalyst.initialize(req);
			const zcql = app.zcql();
			if (req.url.endsWith("/allUsers")) {
				if (!username) {
					res.writeHead(400, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "username is required" }));
				}

				const check = await zcql.executeZCQLQuery(
					`Select image,username from users where username!='${username}'`
				);
console.log(check);
				if (!check || check.length == 0) {
					res.writeHead(200, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "No friends are there" }));
				}
				res.writeHead(200, { "Content-Type": "application/json" });
				return res.end(JSON.stringify({ result: check, message: "Friends are showed" }));

			}
			// ennoda accepted friends
			if (req.url.endsWith("/allFriends")) {
				if (!username) {
					res.writeHead(400, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "username is required" }));
				  }
		  
				  // get my ROWID
				  const me = await zcql.executeZCQLQuery(
					`SELECT ROWID FROM users WHERE username='${username}'`
				  );
				  if (!me.length) {
					return res.end(JSON.stringify({ result: [] }));
				  }
		  
				  const myId = getRowId(me[0]);
		  
				  // get accepted friend requests
				  const fr = await zcql.executeZCQLQuery(
					`SELECT from_person_id, to_person_id 
					 FROM FriendRequest 
					 WHERE status=true 
					 AND (from_person_id=${myId} OR to_person_id=${myId})`
				  );
		  
				  if (!fr.length) {
					return res.end(JSON.stringify({ result: [] }));
				  }
		  
				  const friendIds = fr.map(r => {
					const row = Object.values(r)[0];
					return row.from_person_id === myId
					  ? row.to_person_id
					  : row.from_person_id;
				  });
		  
				  const friends = await zcql.executeZCQLQuery(
					`SELECT username, image,bio FROM users WHERE ROWID IN (${friendIds.join(",")})`
				  );
		  
				  res.writeHead(200, { "Content-Type": "application/json" });
				  return res.end(JSON.stringify({ result: friends || [] }));
			}


			//enakku yarulam request kuduthurukanganu paakra place
			if (req.url.endsWith("/reqFriends")) {
				if (!username) {
					res.writeHead(400, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "username is required" }));
				  }
		  
				  const me = await zcql.executeZCQLQuery(
					`SELECT ROWID FROM users WHERE username='${username}'`
				  );
				  if (!me.length) {
					return res.end(JSON.stringify({ result: [] }));
				  }
		  
				  const myId = getRowId(me[0]);
		  
				  const reqs = await zcql.executeZCQLQuery(
					`SELECT from_person_id 
					 FROM FriendRequest 
					 WHERE status=false AND to_person_id=${myId}`
				  );
		  
				  if (!reqs.length) {
					return res.end(JSON.stringify({ result: [] }));
				  }
		  
				  const senderIds = reqs.map(r => r.FriendRequest.from_person_id);
				  if (!senderIds.length) {
					return res.end(JSON.stringify({ result: [] }));
				  }
				  const senders = await zcql.executeZCQLQuery(
					`SELECT username, image,bio FROM users WHERE ROWID IN (${senderIds.join(",")})`
				  );
				  console.log("REQ FRIENDS HIT");
				  console.log("username:", username);
				  console.log("reqs:", reqs);
				  
				  res.writeHead(200, { "Content-Type": "application/json" });
				  return res.end(JSON.stringify({ result: senders || [] }));

			}


			//reject the request
			if(req.url.endsWith("/rejectRequest")){
				if(! username || ! friendname){
					res.writeHead(400, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "username, friendname are required" }));	
				}
				const fromUser = await zcql.executeZCQLQuery(
					`SELECT ROWID FROM users WHERE username='${friendname}'`
				  );
				  
				  const toUser = await zcql.executeZCQLQuery(
					`SELECT ROWID FROM users WHERE username='${username}'`
				  );
				  
				  if (!fromUser.length || !toUser.length) {
					throw new Error("User not found");
				  }
				  
	
				await zcql.executeZCQLQuery(
					`DELETE FROM FriendRequest
					WHERE from_person_id=${fromUser[0].users.ROWID}
					AND to_person_id=${toUser[0].users.ROWID}
					AND status=false`
				  );
		  
				  return res.end(JSON.stringify({ message: "Friend request rejected" }));
		  
			}

			//accept the request
			if(req.url.endsWith("/acceptRequest")){
				if(! username || ! friendname){
					console.log("=================================");
					console.log(username,friendname);
					res.writeHead(400, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "username, friendname are required" }));	
				}

				const fromUser = await zcql.executeZCQLQuery(
					`SELECT ROWID FROM users WHERE username='${friendname}'`
				  );
				  
				  const toUser = await zcql.executeZCQLQuery(
					`SELECT ROWID FROM users WHERE username='${username}'`
				  );
				  
				  if (!fromUser.length || !toUser.length) {
					throw new Error("User not found");
				  }
				  
				  await zcql.executeZCQLQuery(`
					UPDATE FriendRequest SET status=true
					WHERE from_person_id=${fromUser[0].users.ROWID}
					AND to_person_id=${toUser[0].users.ROWID}
					AND status=false
				  `);
				  
				  return res.end(JSON.stringify({ message: "Friend request accepted" }));
			}



			//give
			if(req.url.endsWith("/RequestToFriend")){
				if (!username || !friendname) {
					res.writeHead(400, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "username & friendname required" }));
				  }
		  
				  const fromUser = await zcql.executeZCQLQuery(
					`SELECT ROWID FROM users WHERE username='${username}'`
				  );
				  const toUser = await zcql.executeZCQLQuery(
					`SELECT ROWID FROM users WHERE username='${friendname}'`
				  );
		  
				  if (!fromUser.length || !toUser.length) {
					res.writeHead(400, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "User not found" }));
				  }
		  
				  const fromId = getRowId(fromUser[0]);
				  const toId = getRowId(toUser[0]);
				  
				  let checkPerson=await zcql.executeZCQLQuery(
					`Select * from FriendRequest where from_person_id=${fromId} and to_person_id=${toId}`
				  )
				  if(checkPerson.length>0){
					res.writeHead(200, { "Content-Type": "application/json" });
					return res.end(JSON.stringify({ message: "Request already sent" }));
				  }

				  await zcql.executeZCQLQuery(
					`INSERT INTO FriendRequest (from_person_id, to_person_id, status)
					 VALUES (${fromId}, ${toId}, 'false')`
				  );
		  
				  res.writeHead(200, { "Content-Type": "application/json" });
				  return res.end(JSON.stringify({ message: "Friend request sent" }));
			}
		}
		catch (err) {
			console.error("Server error:", err);
			res.writeHead(500, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ message: "Server error" }));
		}
	});
}
const getRowId = (row) => {
	const table = Object.values(row)[0];
	return table.ROWID || table.rowid;
  };
  