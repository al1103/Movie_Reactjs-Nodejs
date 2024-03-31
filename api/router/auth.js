const express = require('express');
const router = express.Router();

const authController = require('../controller/authControllers');


router.get('/users/:id', authController.getUser);
router.get('/updateMovie/:id', authController.UpdateMovie);
router.delete('/deletemovie/:id', authController.deleteMovie);
router.get('/getCommentUser/:id', authController.getCommentUser);
router.put('/edit/:slug', authController.editMovie);
router.get('/getListUser', authController.getListUser);
router.get('/getListMovies', authController.listMovie);
router.post('/addMovie', authController.addMovie);
router.get('/', authController.index);
module.exports = router;
