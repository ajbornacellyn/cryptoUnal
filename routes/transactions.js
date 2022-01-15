const express = require('express');
const router = express.Router();
const { renderTransaction } = require('../controllers/renderTemplate')
const { doTransaction } = require('../controllers/transaction')

router.get('/transaction', renderTransaction);

router.post('/transaction', doTransaction);
});