const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();
const PORT = process.env.PORT || 5500;
const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'boln9e2rfaiuugihmxck-mysql.services.clever-cloud.com',
    user: 'u0gkwyhiishove5e',
    password: 'RxgA1boiA5y9AVdMsI97',
    database: 'boln9e2rfaiuugihmxck',
    port: 3306
})

app.get('/products', (req, res) => {
    const sql = `
    SELECT * FROM products
    INNER JOIN categorias
    ON categoria = categorias.id;
    `;
    connection.query(sql, (err, results) => {
        if(err){
            throw err;
        }else{
            res.json(results);
        }
    })
})

app.get('/products/ASC', (req, res) => {
    const sql = `
        SELECT * FROM products
        INNER JOIN categorias
        ON categoria = categorias.id
        ORDER BY precio ASC
    `;
    connection.query(sql, (error, results) => {
        if(error){
            throw error;
        }else{
            res.json(results);
        }
    })
})

app.get('/products/DESC', (req, res) => {
    const sql = `
        SELECT * FROM products
        INNER JOIN categorias
        ON categoria = categorias.id
        ORDER BY precio DESC
    `;
    connection.query(sql, (error, results) => {
        if(error){
            throw error;
        }else{
            res.json(results);
        }
    })
})

app.get('/noticias', (req, res) => {
    const sql = 'SELECT * FROM noticias';
    connection.query(sql, (error, results) => {
        if(error){
            throw error;
        }else{
            res.json(results);
        }
    })
})

app.post('/post', (req, res) => {
    const objeto = {
        producto: req.body.producto,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        precio: req.body.precio,
        categoria: req.body.categoria,
        descuento: req.body.descuento,
        marca: req.body.marca,
        envio: req.body.envio,
    }

    const sql = `INSERT INTO products (producto, descripcion, imagen, precio, categoria, descuento, marca, envio) VALUES (
        '${objeto.producto}',
        '${objeto.descripcion}',
        '${objeto.imagen}',
            ${objeto.precio},
            ${objeto.categoria},
            ${objeto.descuento},
        '${objeto.marca}',
        '${objeto.envio}',
    )`
    
    connection.query(sql, error => {
        if(error){
            throw error;
        }else{
            res.send("Nuevo producto cargado con exito");
        }
    })
})

app.put('/update/:id', (req, res) => {

    const id = req.params.id;

    const objeto = {
        colum: req.body.colum,
        value: req.body.value 
    }

    const sql = `UPDATE products SET ${objeto.colum} = '${objeto.value}' WHERE id = ${id}`;
    
    connection.query(sql, error => {
        if(error){
            throw error;
        }else{
            res.send("Actualizacion exitosa");
        }
    })

})

connection.connect(err => {
    if(err){
        throw err
    }else{
        console.log('Conectado a simplesolutions DATABASE');
    }
})

app.listen(PORT, () => {
    console.log(`Servidor en linea: ${PORT}`);
})


















