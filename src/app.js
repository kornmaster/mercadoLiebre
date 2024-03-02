// modulo nativo
const path = require('node:path');
// modulo 3ros
const express = require('express');
const app = express();


// Routes
/*app.get('/', ( req, res ) =>{
    const pathHome = path.join(__dirname, 'views/home.html')
    res.sendFile(pathHome);
})
app.get('/register', ( req, res ) =>{
    const pathRegister = path.join(__dirname, 'views/register.html')
    res.sendFile(pathRegister);
});

app.get('/login', ( req, res ) =>{
    const pathLogin = path.join(__dirname, 'views/login.html')
    res.sendFile(pathLogin);
});*/
// modularizamos la ruta y ahora lo redireccionamos
const homeRoute = require('./routes/homeRoutes.js') // trames el archivo homeRoutes.js
app.use('/', homeRoute); // con esto lo redireccionamos al archivo

const loginRoute = require('./routes/loginRoutes.js') // trames el archivo homeRoutes.js
app.use('/', loginRoute); // con esto lo redireccionamos al archivo

const registerRoute = require('./routes/registerRoutes.js') // trames el archivo homeRoutes.js
app.use('/', registerRoute); // con esto lo redireccionamos al archivo

// Estatica la carpeta public

// ESTE ES MEJOR Y FUNCIONA CON MVC
app.use(express.static('public')); 
// este no funciona con mvc porque __dirname me da la ubicacion 
//de donde esta la app, que coincidia donde estaba publica
//ahora ya no coincide
app.use(express.static(path.join(__dirname, 'public'))); 


/*app.listen( 3030, () => console.log(`Server up on PORT:  http://localhost:3030`) )*/

// esto lo cambie para usar render
const PORT = process.env.PORT || 3030 //3000 lo toma si es local y PORT es el que da render para su uso

app.listen(PORT, () => console.log(`Server up on PORT:  http://localhost:${PORT}`));
