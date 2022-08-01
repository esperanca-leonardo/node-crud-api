const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

app.get('/', (request, response) => {
  response.json({
    'message': 'Hello world'
  })
})

const port = 3000

const DB_PASSWORD = '9runJNaWURWb8QU4'
const DB_USER = 'antares'
const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@node-api.hzzdf32.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Conectado com sucesso')
    app.listen(port)
  })
  .catch(error => console.log('Erro: ', error))

