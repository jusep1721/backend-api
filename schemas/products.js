const { Schema, model } = require('mongoose');

const schemaProducts = new Schema({
    producto: {
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
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    envio: {
        type: String,
        required: true
    },
    articulo: {
        type: String,
        required: true
    }
})

const product = new model('products', schemaProducts);

module.exports = { product }