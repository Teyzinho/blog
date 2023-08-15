const express = require('express')
const router = express.Router();
const postController = require('../controllers/post')

router.post('/create', postController.create)
router.get('/get', postController.get)

module.exports = router;