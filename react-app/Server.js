const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

let users = [];

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.get('/',(req,res)=>{
    res.write('<h1>hii</h1>')
    res.end();
})

app.get('/users',(req,res)=>{
    return res.send(users);
})

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("giveid", () => {
    socket.emit("sending-socketId", socket.id);
  })

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  socket.on("addtoserver", (name, id) => {
    users.push({ "username": name, "Id": id });
  })

  socket.on("one2one", (msg, friendName) => {
    let friendId = 0;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == friendName) {
        friendId = users[i].Id;
      }
    }
    io.to(friendId).emit("privatemessage", msg, friendName);
  })

});


server.listen(8002, () => {
  console.log("Server listening on port 8002");
});
