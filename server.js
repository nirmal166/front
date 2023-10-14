const express = require('express');
const axios = require('axios');
const app = express();
const port = 8053; // Set your desired port number

app.use(express.json());

// Define CORS headers (for handling cross-origin requests)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Define a route to fetch data from a public API
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Replace with your API URL
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



