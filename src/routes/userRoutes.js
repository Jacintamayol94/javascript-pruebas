const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// @GET /users

router.get('/users', userController.getUserList)

module.exports = router;