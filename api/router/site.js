const express = require('express');
const router = express.Router();

const Movies = require('../controller/Movies');
const User = require('../controller/usersController');

router.get('/getMovies', Movies.getMovies);
router.get('/Search', Movies.SearchMovie);
router.get('/:id/comments', Movies.getComments);
router.get('/:slug', Movies.getOneFilm);

router.get('/', Movies.index);
module.exports = router;

