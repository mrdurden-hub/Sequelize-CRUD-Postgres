const express = require('express');

const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/user/create', UserController.createUser);
router.get('/user/find-all', UserController.findAll);
router.get('/user/find/:id', UserController.findOne);
router.put('/user/update/:id', UserController.updateOne);
router.delete('/user/delete/:id', UserController.deleteOne);

module.exports = router;
