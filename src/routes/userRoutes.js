const express = require('express');

const router = express.Router();
const UserController = require('../controllers/UserController');
const tokenValidation = require('../middlewares/TokenValidation');

// Não deveria exister
router.get('/user/find-all', UserController.findAll); // Busca todos usuários
router.get('/user/find/:id', UserController.findOne);// Busca um usuário

router.post('/user/create', UserController.createUser);
router.put('/user/update', tokenValidation, UserController.updateOne);
router.delete('/user/delete', tokenValidation, UserController.deleteOne);

module.exports = router;
