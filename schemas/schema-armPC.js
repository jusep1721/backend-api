const { Schema, model } = require('mongoose');

const armadoSchema = new Schema({
    tipo: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    componentes: {
        type: Array,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    armado: {
        type: String,
        require: true
    },
    envio: {
        type: String,
        require: true
    },
    gama: {
        type: String,
        require: true
    }
});

const armado = new model('armadoPC', armadoSchema);

module.exports = { armado };