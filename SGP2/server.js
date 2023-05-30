const express = require("express");

const app = express();

//define port
const port = 3000;

app.get("/",(req, res) => {
    res.json({message:'Root page'})
})

//run the application
app.listen(port, () => { 
    console.log('running at port ${port}');
});

//create mysql connection
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Wkawkagkfanr1!',
    database: 'TestDB'
});

//insert query example
app.get("/save-contact", (request, response) => {
    const req=request.query
    const query="INSERT INTO SG_PToilet SET ?";
    var CURRENT_TIMESTAMP = mysql.raw('now()');
    const params={화장실명:req.화장실명,소재지도로명주소:req.소재지도로명주소,본건물용도:req.본건물용도,
        관리기관명:req.관리기관명,전화번호:req.전화번호,데이터기준일자:req.데이타기준일자}

connection.query(query,params,(err,result,fields) =>{
    if(err) throw err;

    response.json({saved:result.affectedRows,insered_id:result.insertId})
});
})

//update query example
//upating mobile number based on name
app.get("/update-contact", (requet, response) => {
    const req=request.query
    const query="UPDDATE SG_PToilet SET "
})