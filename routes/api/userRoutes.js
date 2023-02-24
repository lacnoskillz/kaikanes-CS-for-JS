const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);
// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;
