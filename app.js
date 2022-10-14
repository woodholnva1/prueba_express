const express = require('express')
const morgan = require('morgan')
const app = express()
const puerto = 8000

/* midleware */
app.use(morgan('dev'))

/* Saludo! */ 
var saludo = "<h1>Hola mundo!</h1>";

app.get('/', (req, res) => {
  res.send(`${saludo}`)
});

app.listen(puerto, () => {
  console.log(`listening on port ${puerto}`)
})
