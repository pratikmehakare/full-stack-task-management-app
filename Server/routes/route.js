const express = require("express");
const { addItem, getItem } = require("../controllers/itemController");
const { register, login } = require("../controllers/authController");
const authenticate = require("../middleware/auth");
const router = express.Router();

router.post('/addItem',authenticate,addItem)
router.post('/register',register)
router.post('/login',login)
router.get('/getItem',getItem)

module.exports = router;