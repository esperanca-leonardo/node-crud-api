const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@node-api.hzzdf32.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => console.log('BD connected successfully'))
  .catch(error => console.log(`Erro: ${error}`));

module.exports = mongoose;