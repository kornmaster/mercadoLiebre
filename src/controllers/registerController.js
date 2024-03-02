// registerController
const path = require('node:path');

const controller = {// objeto literal
    renderRegister: (req, res) =>{ // con esto renderizamos la home
        const pathRegister = path.join(__dirname, '../views/register.html');
        res.sendFile(pathRegister); // deolvemos la ruta home.html

       
    }
}
module.exports = controller;