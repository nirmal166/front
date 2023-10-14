const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package

const app = express();


// Enable CORS for all routes
app.use(cors());

app.get('/api/users', (req, res) => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      const formattedData = response.data.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      });
      res.json(formattedData);
    })
    .catch((error) => {
      if (error.response) {
        res.status(error.response.status).json({ error: error.response.statusText });
      } else if (error.request) {
        res.status(8050).json({ error: 'No response received from the server' });
      } else {
        res.status(8050).json({ error: 'Request setup error' });
      }
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

