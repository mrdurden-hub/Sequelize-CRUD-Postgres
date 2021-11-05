const express = require('express');
const multer = require('multer');

const router = express.Router();
const fileController = require('../controllers/FileController');
const multerConfig = require('../config/multer');
const tokenValidation = require('../middlewares/TokenValidation');

const upload = multer(multerConfig);

router.post('/file', tokenValidation, upload.single('img'), fileController.store);

module.exports = router;
