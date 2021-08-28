const express = require('express');
const route = express.Router();

const Projects = require('../models/projects');


//obtener datos de proyectos
route.get('/', async (req, res)=>{
    try{
        const projects = await Projects.find();
        res.json(projects);

    }catch{
        console.log(err);
    }
});

//subir proyecto
route.post('/', async (req,res)=>{
    
    const {nombreCliente,fechaEjecucion,resumen} = req.body;

    try{
        const project = new Projects({nombreCliente,fechaEjecucion,resumen});
        await project.save();
        res.json({status : 200});
    }catch{
        console.log(err);
    }
} );

module.exports = route;