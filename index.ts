const express = require('express');
const app = express();
const ejs= require('ejs');
const input = require("readline-sync");

app.set('view engine', 'ejs'); 
app.set('port', 3000);


app.get('/',(req:any,res:any)=>{
    res.render('index');
})


app.listen(app.get('port'), ()=>console.log( '[server] http://localhost:' + app.get('port')));