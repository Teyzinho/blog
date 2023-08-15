const express = require('express')
const router = express.Router();
const postController = require('../controllers/post')

router.post('/create', postController.create)
router.get('/get', postController.get)
router.get('/:id' , postController.geyById)

module.exports = router;