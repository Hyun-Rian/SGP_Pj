const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv').config()
const mysqlConObj = require('./config/mysql')
const db = mysqlConObj.init()

mysqlConObj.open(db)


app.get('/', (req, res) => res.send('Hello jy World!'))

app.listen(port, () => console.log('Server Running...'))