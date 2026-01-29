//signup

const express = require("express");
const path = require("path");
// const port = 3458;
const app = express();
const db = require("./db/database");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  
// app.listen(port, (err) => {
//     if (err) {
//         console.log(err)
//         console.log("Error in starting server", port);
//     }
//     console.log("Server", port);
// })
app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    const sqlQuery="Select * from users where email=? and password=?";
    db.query(sqlQuery,[email,password],(err,result)=>{
        if(err){
            return res.json({
                message:"Query failed",
                error:err,
            })
        }
        if(result.length ===0){
            return res.json({
                message :"Invalid"
            })
        }
        if(result.length > 0){
            return res.json({
                message:"login successful",
                user:result[0]
            })
        }
    })
})

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    const checkQuery = "select * from users where email=?";
    console.log("sign");
    db.query(checkQuery, [email], (err, result) => {
        if (err) {
            console.log("error", err);

            return res.json({
                error: err
            })
        }
        console.log("Hi1");
        if (result.length > 0) {
            console.log("leng");

            return res.json({
                message: "User already exist"
            })
        }
        console.log("Hi2");
        console.log(name, email, password);
        const sqlQuery = "INSERT into users(username, email,password) values(?,?,AES_encrypt(?,'movie'))";
        db.query(sqlQuery, [name, email, password], (err, result) => {
            if (err) {
                return res.json({
                    message: "insert failed",
                    error: err
                });
            }
            console.log("success");
            return res.json({
                message: "user inserted",
                insertId: result.insertId,
                affectedRows: result.affectedRows
            });
        })
    })
})

app.post("/reqfriends",(req,res)=>{
    const {email}=req.body;
    const checkQuery = "select id, username, email from users where id IN (select from_id from Friends where status ='pending' and to_id=(select id from users where email=?));";
    console.log("sign");
    db.query(checkQuery, [email], (err, result) => {
        if (err) {
            console.log("error", err);

            return res.json({
                error: err
            })
        }
        if (result.length == 0) {
            console.log("leng");

            return res.json({
                message: "User did not found"
            })
        }
    
            console.log("leng");

            return res.json({
                result
            })
        
    })
})


app.post("/allfriends",(req,res)=>{
    const {email}=req.body;
    const allFriendsQuery = `select u.username, u.email from users u join Friends f on(u_id=f.from_id or u_id=f.to_id) where f.status='accepted' and (f.from_id=(select id from users where email = ?) or f.to_id=(select id from users where email = ?))`;

    console.log("sign");
    db.query(allFriendsQuery, [email,email,email], (err, result) => {
        if (err) {
            console.log("error", err);

            return res.json({
                error: err
            })
        }
        if (result.length == 0) {
            console.log("leng");

            return res.json({
                message: "User did not found"
            })
        }
            console.log("leng");

            return res.json({
                result
            })
    })
})

app.post("/sendRequest",(req,res)=>{
    const {from_id,to_id}=req.body;
    const sendRequest=`insert into Friends(from_id,to_id) values(?,?)`;

    db.query(sendRequest, [from_id,to_id], (err, result) => {
        if (err) {
            console.log("error", err);

            return res.json({
                error: err
            })
        }
    
            console.log("leng");

            return res.json({
                result
            })
        
    })
})

app.post("/rejectRequest",(req,res)=>{
    const {from_id,to_id}=req.body;
    const rejectRequest=`delete from Friends where from_id=? and to_id=?`;

    db.query(rejectRequest, [from_id,to_id], (err, result) => {
        if (err) {
            console.log("error", err);

            return res.json({
                error: err
            })
        }
    
            console.log("leng");

            return res.json({
                result
            })
        
    })
})


app.post("/acceptRequest",(req,res)=>{
    const {from_id,to_id}=req.body;
    const acceptRequest=`update Friends set status="accepted" where from_id=? and to_id=?`;

    db.query(acceptRequest, [from_id,to_id], (err, result) => {
        if (err) {
            console.log("error", err);

            return res.json({
                error: err
            })
        }
            console.log("leng");

            return res.json({
                result
            })
        
    })
})