const dotenv = require('dotenv').config();
const app = require('./server');

const PORT = process.env.PORT;

app.get('/', (request, response) => {
  response.json({
    'message': 'Hello world'
  })
});

app.listen(PORT);