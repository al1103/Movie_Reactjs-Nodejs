const express = require('express');
const router = express.Router();

const Movies = require('../controller/Movies');

router.get('/', Movies.index);
router.get('/getMovie', Movies.getMovie);
module.exports = router;

