const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());  // This line is crucial to parse JSON in the request body

// Import and use routes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
