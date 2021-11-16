const mongoose = require('mongoose');
require('dotenv').config();
const conexion = process.env.HOST

const dbconexion = async() => {
    await mongoose.connect(conexion);
    console.log("Conectado al claster simplesolutions");
}

module.exports = { dbconexion }

