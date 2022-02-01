const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/Views/home.html'));  
});
app.get('/registro', (req,res) =>{
    res.sendFile((__dirname + '/Views/registro.html'));  
});

app.use(express.static(path.join(__dirname, './public'))); 


app.listen(process.env.PORT || 3030, function () {
    console.log("Servidor corriendo");
});
//dsdsd
