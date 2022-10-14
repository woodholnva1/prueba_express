const express = require('express')
const morgan = require('morgan')
const app = express()
const puerto = 8000

/* midleware */
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); /* Para Peticiones POST */



/* Saludo! */ 
var saludo = "<h1>Hola mundo!</h1>";

app.get('/', (req, res) => {
  res.send(`${saludo}`)
});


app.post('/formulario',(req,res) =>{
    var data = req.body;
    res.send("Tu Mensaje es: " + data.Mensaje)
    console.log(req.body)
});

app.listen(puerto, () => {
  console.log(`listening on port ${puerto}`)
})
