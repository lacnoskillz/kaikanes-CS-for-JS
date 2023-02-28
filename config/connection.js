//require mongoose
const { connect, connection } = require('mongoose');

// create connection to mongoDB and name database
connect('mongodb://localhost/kaismod18challenge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
 //export out connection
module.exports = connection;
