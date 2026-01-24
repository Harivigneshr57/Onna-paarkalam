//signup

const express = require("express");
const path = require("path");
const port = 3456;
const app = express();
const db = require("./db/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, (err) => {
    if (err) {
        console.log(err)
        console.log("Error in starting server", port);
    }
    console.log("Server", port);
})

app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;
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
        console.log(username, email, password);
        const sqlQuery = "INSERT into users(username, email,password) values(?,?,?)";
        db.query(sqlQuery, [username, email, password], (err, result) => {
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