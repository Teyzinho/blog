const express = require('express')
const router = express.Router();
const postController = require('../controllers/post')

router.post('/create', postController.create)
router.get('/get', postController.get)
router.get('/getcategories' , postController.getcategories)
router.put('/update' ,postController.update)
router.get('/:id' , postController.geyById)

module.exports = router;