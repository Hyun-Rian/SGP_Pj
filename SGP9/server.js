var express = require('express');
var app = express();

app.get('/', function (req, res) {
    //res.send('Hello World!');
    res.sendFile(__dirname + '/app/index.html');
});

var server = app.listen(8000, function () {
    console.log('load Success!');
});

var mysql = require('mysql');

var dbConnection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:'Wkawkagkfanr1!',
    database:'testDB'
});

dbConnection.query('select*from testDB', function (err, rows, fields) {
    console.log(rows);
});

app.get('/testDB', function (req, res){
    dbConnection.query('select*from SG_Ptoilet', function (err, rows, fields) {
        res.json(rows);
    });
});

app.get('/testDB/:T_Name', function (req, res) {
    var T_Name = req.params.T_Name;
    dbConnection.query('select*from SG_Ptoilet where T_Name=?',
    [T_Name],
    function (err, rows, fields){
        res.json(rows);
    });
});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('testDB', function (req, res){
    var T_Name = req.body.T_Name,
        R_N_Adrress = req.body.R_N_Adrress;
    dbConnection.query('Insert into SG_Ptoilet(T_Name, R_N_Adrress',
    [T_Name], [R_N_Adrress],
    function (err, rows, fields){
        res.json(rows);
    });
    
    console.log(T_Name);
    console.log(R_N_Adrress);
});

app.put('testDB', function (req, res) {
    var T_Name = req.body.T_Name,
        R_N_Adrress = req.body.R_N_Adrress;
    
    console.log(T_Name);
    console.log(R_N_Adrress);
});