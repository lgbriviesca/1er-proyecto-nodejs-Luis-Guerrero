const express = require('express');
const {
  getAllUsers,
  createAccountForUser,
  login,
  getTransferencesById,
} = require('../controllers/usersController');

const router = express.Router();

router.get('/', getAllUsers);

router.post('/signup', createAccountForUser);

router.post('/login', login);

router.get('/:id/history', getTransferencesById);

module.exports = { usersRouter: router };
