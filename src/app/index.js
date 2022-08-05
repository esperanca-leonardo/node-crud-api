const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./server');


app.get('/', (request, response) => {
  response.json({
    'message': 'Hello world'
  })
});

const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@node-api.hzzdf32.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Conectado ao BD com sucesso')
    app.listen(PORT)
  })
  .catch(error => console.log(`Erro: ${error}`));