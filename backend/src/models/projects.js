const mongoose = require('mongoose');
const {Schema} = mongoose;

const projectSchema = new Schema({

    nombreCliente : {type : String, required: true},
    fechaEjecucion : {type : String, required : true},
    resumen : {type : String, required : true, max :70}
});

const projects = mongoose.model('proyectos', projectSchema);
module.exports = projects;