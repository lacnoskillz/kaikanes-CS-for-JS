const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
//require user and thought Routes
// has them use the below route
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
//exports them
module.exports = router;
