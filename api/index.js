var express = require('express');
var http = require('http');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send("Bem-vindo à nossa API-REST")
})

http.createServer(app).listen(8001, () =>{
    console.log("Servidor rodando em http://localhost/8001")
})