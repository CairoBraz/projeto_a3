var express = require('express');
var http = require('http');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send("Bem-vindo à nossa API-REST")
})

app.get('/produtos', (req, res) => {
    res.status(200).send("Rota para retornar produtos.")
})

app.post('/produtos', (req, res) => {
    // armazena no banco de dados
    res.status(200).send("Rota para salvar produtos.")
})

app.get('/clientes', (req, res) => {
    res.status(200).send("Rota para retornar clientes.")
})

app.post('/clientes', (req, res) => {
    // armazena no banco de dados
    res.status(200).send("Rota para salvar clientes.")
})

http.createServer(app).listen(8001, () =>{
    console.log("Servidor rodando em http://localhost/8001")
})