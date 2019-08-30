const express = require('express');
const app = express();
const port = 3000;

// DOTENV
const dotenv = require('dotenv');
const { error } = dotenv.config();

if (error) {
  console.log(error);
}

// API ROUTES
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/restaurants', (req, res, next) => {
  try {
    const key = process.env.YELP_API_KEY;
    res.json(key);
  } catch (err) {
    next(err);
  }
});

// PORT LISTENER
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
