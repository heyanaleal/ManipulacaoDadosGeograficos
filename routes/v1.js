const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

const authController = new AuthController();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem vindo a API GeoPoly!' });
});

router.post('/auth', (req, res) => {
  authController.authenticate(req, res);
});

module.exports = router;
