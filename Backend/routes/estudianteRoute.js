'use strict'
var express=require('express');
var PersonaController=require('../controller/estudianteController');
var router = express.Router();
router.get('/brindarporelausente',PersonaController.datosEstudiante);
router.get('/listar-estudiante/:parametro?',PersonaController.get_estudiantes);
router.post('/save',PersonaController.save);
router.get('/buscar/:id',PersonaController.get_estudiantes);
module.exports=router;