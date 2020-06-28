'use strict'
var mongoose = require('mongoose');
var app=require('./app');
var port=5000;
var mongoose=require('mongoose');
/*Primer campo: direccion del servidor, Segundo campo: opcional */
mongoose.connect('mongodb://localhost:27017/estudiantes',{useNewUrlParser:true})
.then(()=>{
    console.log('CONECTADOS MI PERRRORORORORO');
    app.listen(port,()=>{
        console.log('servidor esta corriendo en http://localhost:'+port)
    })
});