// require package express and mongo connection from config folder setting it to db const
// require all routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();
// declare port to be used
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
//
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
