// modulo nativo
const path = require('node:path');
// modulo 3ros
const express = require('express');
const app = express();


// Routes
app.get('/', ( req, res ) =>{
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
});


// Estatica la carpeta public

app.use(express.static(path.join(__dirname, 'public')));

/*app.listen( 3030, () => console.log(`Server up on PORT:  http://localhost:3030`) )*/

// esto lo cambie para usar render
const PORT = process.env.PORT || 3030

app.listen(PORT, () => console.log(`Server up on PORT:  http://localhost:${PORT}`));
