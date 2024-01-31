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





// Estatica la carpeta public

app.use(express.static(path.join(__dirname, 'public')));

/*app.listen( 3030, () => console.log(`Server up on PORT:  http://localhost:3030`) )*/

// esto lo cambie para usar render
const PORT = process.env.PORT || 3030

app.listen(PORT, () => console.log(`Server up on PORT:  http://localhost:${PORT}`));
