const { connect, connection } = require('mongoose');

connect('mongodb://localhost/developersApplications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

module.exports = connection;
