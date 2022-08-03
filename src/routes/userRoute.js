const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/', async (request, response) => {
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

router.get('/', async (request, response) => {
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

router.get('/:id', async (request, response) => {
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

router.patch('/:id', async (request, response) => {
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

router.delete('/:id', async (request, response) => {
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

module.exports = router;