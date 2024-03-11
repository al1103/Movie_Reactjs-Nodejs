const express = require('express');
const router = express.Router();

const authController = require('../controller/authControllers');


router.get('/listuser', authController.getUser);
router.get('/getListMovies', authController.listMovie);
router.put('/edit/:slug', authController.editMovie);
router.get('/:slug', authController.getOneFilm);
router.post('/addMovie', authController.addMovie);
router.delete('/delete/:slug', authController.deleteMovie);
router.get('/', authController.index);
module.exports = router;
