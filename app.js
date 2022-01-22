const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/home.html'));  
});
app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/registro.html'));  
});

app.use(express.static(path.join(__dirname, './public'))); 


app.listen(3003, function () {
    console.log("Servido corriendo");
});

