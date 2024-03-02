// loginController
const path = require('node:path');

const controller = {// objeto literal
    renderLogin: (req, res) =>{ // con esto renderizamos la home
        const pathLogin = path.join(__dirname, '../views/login.html');
        res.sendFile(pathLogin); // deolvemos la ruta home.html

       
    }
}
module.exports = controller;