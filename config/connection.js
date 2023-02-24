const { connect, connection } = require('mongoose');

connect('mongodb://localhost/kaismod18challenge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

module.exports = connection;
