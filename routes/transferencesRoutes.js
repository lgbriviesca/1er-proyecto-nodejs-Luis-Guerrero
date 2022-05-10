const express = require('express');
const { createTransference } = require('../controllers/transferenceController');
const router = express.Router();

//al router se le pasan los endpoints que app ejecutará

router.post('/', createTransference);

module.exports = { transferenceRouter: router };
