const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { armadoPC } = require('./routers/armadoPC');
const { dbconexion } = require('./mongo');
const app = express();
const PORT = process.env.PORT || 3003;

const main = () => {

    app.use(express.json());

    app.use(cors());

    app.use('/api/armadoPC', armadoPC);

    try {
        app.listen(PORT, () => {
            console.log(`Servidor en linea ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }

}

dbconexion()
    .then(main)
    .catch(error => {
        console.log(error);
    });