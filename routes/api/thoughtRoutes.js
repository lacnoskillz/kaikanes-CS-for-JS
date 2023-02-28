const router = require('express').Router();
// bring in functions from thoughtControllers to be called here on certain routes
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
// route that gets all thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// route that gets single thought/ deletes and updates
// uses the below methods
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtID/reactions
// route that gets adds a reaction to the thought
router.route('/:thoughtId/reactions').post(addReaction);


// /api/thoughts/:thoughtId/reactions/:reactionId
// route that deletes a reaction on a thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
