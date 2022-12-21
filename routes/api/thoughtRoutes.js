const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtsController');

// /api/videos
router.route('/').get(getThought).post(createThought);

// /api/videos/:videoId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/videos/:videoId/responses
router.route('/:thought/responses').post(addThoughtResponse);

// /api/videos/:videoId/responses/:responseId
router.route('/:thought/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;
