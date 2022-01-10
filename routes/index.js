const express = require('express');
const router = express.Router();

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
})

module.exports = router;