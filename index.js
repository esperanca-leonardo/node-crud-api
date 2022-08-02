const express = require('express')
const mongoose = require('mongoose')

const User = require('./models/User')

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

app.post('/user', async (request, response) => {
  const { name, email, password } = request.body

  const user = { name, email, password }
  
  try {
    await User.create(user)
    
    response
      .status(201)
      .json({ 
        message: 'User criado com sucesso',
        user: user
      })
  }
  catch (error) {
    response
      .status(500)
      .json({ error: error })
  }
})

app.get('/user', async (request, response) => {
  try {
    const users = await User.find()  
  
    response
      .status(200)
      .json(users)
  }
  catch (error) {
    response
      .status(500)
      .json({ error: error })
  }
})

app.get('/user/:id', async (request, response) => {
  const id = request.params.id
  
  try {
    const user = await User.findOne({ _id: id })

    response
      .status(200)
      .json(user)
  }
  catch (error) {
    response
      .status(500)
      .json({ error: error })
  }
})

app.patch('/user/:id', async (request, response) => {
  const id = request.params.id

  const { name, email, password } = request.body

  const user = { name, email, password }

  try {
    await User.updateOne({ _id: id }, user)
  
    response
      .status(200)
      .json({ 'message': 'usuario atualizado com sucesso' })
  }
  catch (error) {
    response
      .status(500)
      .json({ error: error })
  }
})

app.delete('/user/:id', async (request, response) => {
  const id = request.params.id
  
  try {
    await User.deleteOne({ _id: id })
  
    response
      .status(200)
      .json({ message: 'usuario deletado com sucesso' })
  }
  catch (error) { 
    response
      .status(500)
      .json({ error: error })
  }
})