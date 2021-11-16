const { Router } = require('express');
const { armado } = require('../schemas/schema-armPC');
const armadoPC = Router();

armadoPC.get('/', (req, res) => {
    armado.find()
        .then(armado => {
            res.json(armado);
        })
});

armadoPC.post('/', (req, res) => {
    const body = req.body;
    const resultado = creandoUser(body);
    resultado.then(dato => {
        res.json(dato);
    }).catch(e => {
        res.status(400).send(e);
    })
});

async function creandoUser(body){

    const newPC = new armado(body);
    return await newPC.save();

}

armadoPC.put('/:id', (req, res) => {

    const update = actualizandoDatos(req.params.id, req.body);
    update.then(dato => {
        res.json(dato);
    }).catch(e => {
        res.status(400).send(e);
    })

})

async function actualizandoDatos(id, body){

    const articulo = await armado.findByIdAndUpdate(id, body);
    return articulo;

}

armadoPC.delete('/:id', (req, res) => {

    const articulo = eliminandoDatos(req.params.id, req.body);
    articulo.then(() => {
        res.status(200).send('Se elimino exitosamente');
    }).catch(e => {
        res.status(400).send(e);
    })

})

async function eliminandoDatos(id, body){

    const articulo = await armado.findByIdAndDelete(id, body);
    return articulo;

}

module.exports = { armadoPC };