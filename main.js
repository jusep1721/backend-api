const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3306;
const { dbconexion } = require('./mongo');
const { productsAPP } = require('./routers/products');
const { noticiaAPP } = require('./routers/noticias');
const app = express();

const main = () => {
    app.use(express.json());
    app.use(cors());

    app.use('/apiProducts', productsAPP);
    app.use('/apiNoticias', noticiaAPP);

    try{
        app.listen(PORT, () => {
            console.log(`Servidor funcionando en: ${PORT}`);
        })
    } catch (err){
        console.log(err);
    }

}

dbconexion()
    .then(main)
    .catch(err => {
        console.log(err);
    })
