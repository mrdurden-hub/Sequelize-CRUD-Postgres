const express = require('express');

const router = express.Router();
const TokenController = require('../controllers/TokenController');

router.post('/token', TokenController.store);

module.exports = router;
