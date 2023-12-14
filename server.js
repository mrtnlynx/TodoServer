const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./routes/todo.routes');
const dotenv = require('dotenv');
const app = express();

app.use(bodyParser.json());

app.use('/todos', todoRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on Port 3000.');
});