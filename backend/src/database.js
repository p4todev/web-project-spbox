const mongoose = require('mongoose');

const dbUser = "patricio";
const dbPass = "TCrJyhr9HR42AEk7";
const dbName = "spbox";

const URI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.6x2lz.mongodb.net/${dbName}?retryWrites=true&w=majority`
 
mongoose.connect(URI,{useNewUrlParser : true, useUnifiedTopology : true})
            .then(db=>console.log('se ha conectado a la base de datos'))
            .catch(err=>err);