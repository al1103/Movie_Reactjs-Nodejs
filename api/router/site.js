const express = require('express');
const router = express.Router();

const Movies = require('../controller/Movies');

router.get('/getMovies', Movies.getMovies);
router.get('/:slug', Movies.getOneFilm);
router.get('/', Movies.index);
module.exports = router;

