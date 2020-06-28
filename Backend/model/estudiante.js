'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var EstudianteSchema=Schema({
    nombre:String,
    apellido:String,
    cedula:Number,
    fecha_matricula:{
        type:Date,
        default:Date.now
    },
});
module.exports=mongoose.model('Estudiante',EstudianteSchema);