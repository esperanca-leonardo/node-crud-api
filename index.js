const express = require('express')

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

app.listen(3000)