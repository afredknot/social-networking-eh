const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
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
router.route('/:thoughtId/reaction').post(addReaction);

// /api/videos/:videoId/reaction/:ReactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
