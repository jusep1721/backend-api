const { Router } = require('express');
const { noticia } = require('../schemas/noticias');
const noticiaAPP = Router();

noticiaAPP.get('/noticias', (req, res) => {
    noticia.find().then(e => res.json(e)).catch(() => res.status(404).send("No se encontro ningun dato"))
})

// noticiaAPP.post('/postNoticia', (req, res) => {
//     const body = req.body
//     const newNoticia = creandoNoticia(body)
//     newNoticia.then(res.status(401).send("Nueva noticia registrada")).catch(() => res.status(204).send("Error al cargar la noticia"))
// })

// const creandoNoticia = async body => {
//     const newNoticia = new noticia(body)
//     return await newNoticia.save()
// }

module.exports = { noticiaAPP }

