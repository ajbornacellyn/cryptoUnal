const { render } = require('express/lib/response');

const renderLogin = (req, res) => {
    res.render('index', {
        title: `Welcome to cryptoUNAL`
    })
}

const renderRegister = (req, res) => {
    res.render('register', {
        title: `User registration`,
        confirmationError: "true",
        emailError: "false"
    })
}

const renderTransaction = (req, res) => {
    res.render('transaction', {
    title: 'Transactions'
    })
}

module.exports = {renderLogin, renderRegister, renderTransaction}