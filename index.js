const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'signup',
})
app.post('/signup',(req, res)=>{
    const sql = 'INSERT INTO signin (`username`, `email`, `password`) VALUES (?,?,?)';
    db.query(sql, [req.body.username, req.body.email , req.body.password],(err,data)=>{
        if(err) {
            return res.json("Error");
        }
        console.log(data);
        return res.json(data);
    })
})
app.post('/',(req, res)=>{
    const sql = "SELEECT * FROM signin WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password],(err,data)=>{
        if(err) {
            return res.json("Error");
        }
        console.log(data);
        return res.json(data);
    })
})
app.listen(8081, ()=>{
    console.log("Server listening on port 8081");
})