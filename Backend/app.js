'use strict'
//Cargar modulos de node.js
var express=require("express");
var bodyparser=require("body-parser");

//Ejecutar el express servidor http
var app=express();

//Cargar archivos las rutas
var estudianteRoutes=require('./routes/estudianteRoute')

//Middlware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//CORS para las peticiones

//Añadir los prefijos

//Ruta
app.use('/',estudianteRoutes);
app.get('/prueba',(req,res)=>{
    return res.status(200).send({
        mensaje:'bienvenidos a la clase de fullstack',
        mensaje2:'estamos melos'
    })
});

//Exportar los modulos
module.exports=app;