const mongoose = require('../database/index');
const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());
app.use('/user', userRoute);

module.exports = app;