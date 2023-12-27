const express = require('express');
const app = express();


app.get('/random', (req, res) => {
  const min = 1;
  const max = 100; 
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  res.json({ randomNumber: randomNum });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
