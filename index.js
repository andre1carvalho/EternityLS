const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const connection = require ("./database/database");


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection  
    .authenticate()
    .then(() =>{
        console.log("connection have been sucessful!")
    })
    .catch((msgError) =>{
        console.log(msgError); 
    }) 



app.get("/",(req, res)=> {
    res.render("index");
})

app.listen(8080,function(erro){
    if(erro){
        console.log("an error has occurred!");       
    }else{
        console.log("server started successfully!");
    }
})