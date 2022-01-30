const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const port = 8000

// Define o template engine
app.engine('handlebars', engine())

app.set('view engine', 'handlebars')

// define a pasta de arquivos estáticos
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Notes_Mongo rodando na porta ${8000}`)
})

