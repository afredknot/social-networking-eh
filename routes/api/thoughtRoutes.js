const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtsController');

// /api/videos
router.route('/').get(getThought).post(createThought);

// /api/videos/:videoId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/videos/:videoId/reaction
router.route('/:thought/reaction').post(addThoughtReaction);

// /api/videos/:videoId/reaction/:ReactionId
router.route('/:thought/reaction/:reactionId').delete(removeThoughtReaction);

module.exports = router;
