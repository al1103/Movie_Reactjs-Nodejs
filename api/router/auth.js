const express = require('express');
const router = express.Router();

const authController = require('../controller/authControllers');


router.get('/getListUser', authController.getListUser);
router.get('/user/:id', authController.getUser);
router.get('/getListMovies', authController.listMovie);
router.put('/edit/:slug', authController.editMovie);
router.post('/addMovie', authController.addMovie);
router.delete('/deletemovie/:id', authController.deleteMovie);
router.get('/:slug', authController.getOneFilm);
router.get('/', authController.index);
module.exports = router;
