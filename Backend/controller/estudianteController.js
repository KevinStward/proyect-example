'use strict'
var validator1=require('validator');
var Estudiante=require('../model/estudiante')
const {default: validator} = require('validator');
var controller = {
    datosEstudiante:(req,res)=>{
        console.log('Cualquier cosa');
        return res.status(200).send({
            nombre: 'Karlimar Piza',
            curso: 'FS',
            nota:'0'
        })
    },
    save:(req,res)=>{
        //recoger los parametros
        var params=req.body;
        console.log(params);
        //Validar los datos
        try{
            var validar_nombre=!validator1.isEmty(params.nombre);
            var validar_apellido=!validator1.isEmty(params.apellido);
            var validar_cedula=!validator1.isEmty(params.cedula);

        }
        catch(err){
            return res.status(404).send({
                message:"Escriba bien gonorrea",
            });
        }
        //Guardar
        var estudiante=new Estudiante;
        estudiante.nombre=params.nombre;
        estudiante.apellido=params.apellido;
        estudiante.cedula=params.cedula;
        estudiante.save((err,EstudianteStored)=>{
            if(err || !EstudianteStored){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se pudo pues hombre',
                })
            }
            //Devolver el valor
            return res.status(200).send({
                status: 'operacion exitosa',
                message: 'se pudo guarder'
            })
        })
    },
    get_estudiantes:(req,res)=>{
        var query = Estudiante.find({});
        var variable = req.params.paranetro;
        if(variable || !variable==undefined){
            query.limit(4);
        }
        query.exec((err,estudianes)=>{
            if(err){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se pudo pues hombre',
                })
            }
            return res.status(200).send({
                status: 'operacion exitosa',
                message: 'se pudo guarder'
            })
        })
    },
    get_estudiantebyid:(req,res)=>{
        var id=req.params.id;
        if(!id || id==null){
            return res.status(404).send({
                status:'error',
                message:'No hay id',
            })
        }
        Estudiante.findById(id,(err,Estudiante)=>{
            if(err){

            }
        })
    },
};
module.exports=controller;