let fs = require('fs')
// console.log(fs)

let moment = require('moment')
// console.log(moment().date("2024/03/18"))

let datos = fs.readFileSync(__dirname + '/prueba.txt'  , 'utf-8');
// console.log(datos);

const heroes = require('./horoes/prueba')
// console.log(heroes)

// -----------------------------------------------------------

const express = require('express');
const app = express();

const path = require('path');

// app.get("/", (req, res) => {
//     res.send("Bienvenidos al sitio")
// })

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname +"/views/home.html"))
})

app.get("/product", (req, res) => {
    res.send("Estamos en Productos")
})


app.listen(3040, ()=>
    console.log('Servidor corriendo en el puerto 3040')
);
