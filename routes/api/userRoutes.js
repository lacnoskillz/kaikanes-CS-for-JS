const router = require('express').Router();
// bring in functions from userControllers to be called here on certain routes
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
// route that gets all users and posts new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// routes that gets a single user. delete user or update a user
router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').get(getSingleUser);

// /api/users/:userId/friends/:friendId
// routes that add friend to users friend list or deletes user from friends list
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
