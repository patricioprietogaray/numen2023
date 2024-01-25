const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

// router.post('/', userController.createUser);
router.post('/', userController.createUsers);
router.get('/', userController.getAllUsers);


module.exports = router;