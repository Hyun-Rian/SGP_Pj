const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000

const con = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'Wkawkagkfanr1!',
        database: 'TestDB'
});

con.connect(err => {
        if (err) console.log("MySQL 연결 실패 : ", err);
        console.log("MySQL Connected!!!");
})

//app.get('/',(req,res) => res.send('Hello JY World!'))

//app.listen(port, () => console.log('Server Running. . .'))