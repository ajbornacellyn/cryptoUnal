const express = require('express');
const router = express.Router();
const {signTransaction} = require('../controllers/transaction')

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        test: 'Test'
    })             // respond with "helloworld when reqeuesting /"
});

router.get('/register', (req, res, next) => {
    res.render('register', {
        title: 'Register',
    })
});

router.get('/transaction', (req, res) => {
    res.render('transaction', {
    title: 'Transactions'
    })
});

router.post('/transaction', async(req, res, next) => {
    const {recipient, amount } = req.body;
    await signTransaction(recipient, amount);
    res.send('transaction made');
});

module.exports = router;