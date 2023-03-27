const router = require('express').Router();

// @desc    Get all the knowledge
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {;
  res.send('This is the REST API home. Add an endpoint to see data.')
});

module.exports = router;