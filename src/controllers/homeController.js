// homeController
const path = require('node:path');

const controller = {// objeto literal
    renderHome: (req, res) =>{ // con esto renderizamos la home
        const pathHome = path.join(__dirname, '../views/home.html');
        res.sendFile(pathHome); // deolvemos la ruta home.html

       
    }
}
module.exports = controller;

