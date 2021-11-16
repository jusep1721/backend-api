const mongouse = require('mongoose');
require('dotenv').config();

const conexion = process.env.HOST

const dbconexion = async() => {

    try {
        await mongouse.connect(conexion, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`Base de datos en linea`);
    } catch (error) {
        console.log(error);
    }

}

module.exports = { dbconexion };