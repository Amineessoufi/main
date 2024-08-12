// server.js
const express = require('express');
const connectDB = require('./config/db'); // Import the database connection
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hamma', (req, res) => {
    res.send('Hello hamma!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
