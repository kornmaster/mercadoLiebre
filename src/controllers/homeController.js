// homeController
const path = require('node:path');
// traemos el json como javascrip
const data = require('../models/productData.json'); // Objeto literal


const controller = {// objeto literal
    /* renderHome: (req, res) =>{ // con esto renderizamos la home
         const pathHome = path.join(__dirname, '../views/home.html');
         res.sendFile(pathHome); // deolvemos la ruta home.html*/
    renderHome: (req, res) => {
        res.render('home',{
            articuloss: data.articulos
        });

    }, // va la ,
    renderRegister: (req, res) => {
        res.render('register');
    },
    renderLogin: (req, res) => {
        res.render('login');
    }
}
module.exports = controller;

