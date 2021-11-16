const { Schema, model } = require('mongoose');

const schemaNoticia = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
})

const noticia = new model('noticias', schemaNoticia);

module.exports = { noticia }