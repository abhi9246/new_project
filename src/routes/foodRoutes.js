const express = require('express');
const foodController = require('../controllers/foodController');
const requireAuth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/upload-food', requireAuth, foodController.uploadFood);
router.get('/user/uploads', requireAuth, foodController.getUserUploads);

module.exports = router;