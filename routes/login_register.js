const express = require('express');
const router = express.Router();
const {renderLogin , renderRegister } = require('../controllers/renderTemplate')
const {getUserLogin, registerUser} = require('../controllers/loginRegisterPost')

router.get('/', renderLogin);
router.post('/', getUserLogin);
router.get('/register', renderRegister);
router.post('/register', registerUser, renderRegister);

module.exports = router;