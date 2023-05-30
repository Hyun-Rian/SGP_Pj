//const express = require('express')
import express from "express";
const app = express();
const PORT = 5000;

/*function handleListening(){
    console.log('Listening on : http://localhost:${PORT}');
}

function handleHome(req, res){
    res.send("hello world");
}

app.get("/", handleHome);*/

const handleListen = () => console.log('http:localhost:${PORT} Server OPEN');
const handleDefault = (req, res)=> res.send("Hello HOME");
const handleJoin = (req, res) => res.send("Welcome JOIN");

const middleware1 = (req, res, next) => {
    console.log("middleware1");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("middleware2");
    next();
}

app.get('/', middleware1, middleware2, handleDefault);
app.get('/join', handleJoin);

app.listen(PORT, handleListen);