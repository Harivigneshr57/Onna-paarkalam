<<<<<<< HEAD
const dotenv=require("dotenv");
=======
// const dotenv=require("dotenv");
>>>>>>> b54d6aa1a2ddc2fe33ef2f28154dea9894031301
require("dotenv").config();
const mysql=require("mysql2");

const db=mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false 
      }
<<<<<<< HEAD
=======

>>>>>>> b54d6aa1a2ddc2fe33ef2f28154dea9894031301
})

db.connect(err=>{
    if(err){
        console.log("Not connected to database",err);
    }
    else{
<<<<<<< HEAD
=======
        console.log("Hi");
>>>>>>> b54d6aa1a2ddc2fe33ef2f28154dea9894031301
        console.log("connented to database",db.port);
    }
})
module.exports=db;