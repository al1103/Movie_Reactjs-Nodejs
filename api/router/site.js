const express = require('express');
const router = express.Router();

const Movies = require('../controller/Movies');

router.get('/', Movies.index);
module.exports = router;

