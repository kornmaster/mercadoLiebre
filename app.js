const express = require('express');
const app = express();
const path = require('node:path');

// Routes
app.get('/', ( req, res ) =>{
    const pathHome = path.join(__dirname, 'views/home.html')
    res.sendFile(pathHome);
})





// Public (static) Listen Server

app.use(express.static(path.join(__dirname, 'public')));

app.listen( 3030, () => console.log(`Server up on PORT:  http://localhost:3030`) )