const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/home.html'));  
});
app.get('/registro', (req,res) =>{
    res.sendFile((__dirname + '/views/registro.html'));  
});

//app.use(express.static(path.join(__dirname, './public'))); 
app.use(express.static('public'));

app.listen(process.env.PORT || 3030, function () {
    console.log("Servidor corriendo");
});

