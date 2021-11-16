const { Router } = require('express');
const { product } = require('../schemas/products');
const productsAPP = Router();

productsAPP.get('/', (req, res) => {
    res.send("Bienvenido a la API de simplesolutions 😊");
})

productsAPP.get('/products', (req, res) => {
    product.find().then(e => res.json(e)).catch(() => res.status(204).send("Productos no encontrados"))
})

productsAPP.get('/products/ASC', (req, res) => {
    product.find().sort({precio: 'asc'}).then(e => res.json(e)).catch(() => res.status(404).send("Productos no encontrados"))
})

productsAPP.get('/products/DESC', (req, res) => {
    product.find().sort({precio: 'desc'}).then(e => res.json(e)).catch(() => res.status(404).send("Productos no encontrados"))
})

// productsAPP.post('/post', (req, res) => {
//     const body = req.body;
//     const newProduct = creandoRegistro(body);
//     newProduct.then(res.status(401).send("Registro creado")).catch(() => res.status(406).send("No se cargo el nuevo producto"))

// })

// const creandoRegistro = async body => {
//     const results = new product(body);
//     return await results.save()
// }

// productsAPP.put('/update/:id', (req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     const registro = updateRegistro(id, body)
//     registro.then(res.status(200).send("Registro actualizado")).catch(() => res.status(304).send("No se modifico el registro"))

// })

// const updateRegistro = (id, body) => {
//     const registro = product.findByIdAndUpdate(id, body)
//     return registro;
// }

// productsAPP.delete('/delete/:id', (req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     const registro = borrandoRegistros(id, body)
//     registro.then(res.status(200).send("Registro borrado")).catch(() => res.status(406).send("No se logro eliminar el registro"))

// })

// const borrandoRegistros = (id, body) => {
//     const registro = product.findByIdAndDelete(id, body)
//     return registro;
// }

module.exports = { productsAPP }