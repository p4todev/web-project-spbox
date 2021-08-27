const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT || 3001;

//database conection
const { mongoose } = require('./database');

//routes
app.use('/api/proyectos', require('./routes/projects.routes'));

//send email 
app.post('/send-email', async (req,res)=>{

    const {name,email,number,affair,message} = req.body;

    const contentHTML = `
        <h1>Informacion solicitud de mensaje</h1>

        <p> se ha recivido una solicitud de informacion por parte de : </p>

        <ul>
            <li>${name}</li>
            <li>${email}</li>
            <li>${number}</li>
            <li>${affair}</li>
        </ul>
        <p>${message}</p>

    `

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'joy.hirthe82@ethereal.email',
            pass: 'vtCctvZ9VJXcTcJRuZ'
        },
        tls : {
            rejectUnauthorized : false
        }
    });


    const info = await transporter.sendMail({
        from : "SPBox <joy.hirthe82@ethereal.email>",
        to : "pa.sotoquev@gmail.com",
        subject : "Formulario de contacto SPBox",
        html : contentHTML
    });

    res.json('enviado');
});


app.listen(port, () => {
    console.log(`escuchando en el puerto : ${port}`);
});