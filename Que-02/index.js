const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json } = require("express");

// Initialize the counter
let counter = 0;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Route to increment the counter by 1
app.post('/increment', (req, res) => {
  counter += 1;
  res.json({ counter });
});

// Route to decrement the counter by 1
app.post('/decrement', (req, res) => {
  counter -= 1;
  res.json({ counter });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
