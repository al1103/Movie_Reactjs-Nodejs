const express = require('express');
const router = express.Router();

const usersController = require('../controller/usersController');
router.use('/login', usersController.authenticateUser);
router.use('/register', usersController.createUser);
router.use('/:id/Comment', usersController.postComment);

module.exports = router;
