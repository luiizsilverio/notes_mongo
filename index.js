const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const port = 8000

// Banco de dados
const db = require('./db/connection')


// Define o template engine
app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

// define a pasta de arquivos estáticos
app.use(express.static('public'))

// habilita o uso do request.body
app.use(express.urlencoded({ extended: true }))
// app.use(bodyParser.urlencoded({ extended: true })

// Rotas

const notesRoutes = require('./routes/notes')

app.get('/', (req, res) => {
  res.render('home')
})

app.use('/notes', notesRoutes)

// conecta no banco

db.initDb((err, db) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log('Conectou no banco com sucesso')
    app.listen(port, () => {
      console.log(`Notes_Mongo rodando na porta ${8000}`)
    })
  }
})
