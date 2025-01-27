const { render } = require('express/lib/response');
const { getBalanceETH } = require('../utils/getBalance')


const renderLogin = (req, res) => {
    req.session.destroy();
    console.log(req.session);
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

const renderHomepage = (req, res, user) => {
    if (req.query.authenticated === 'true' && req.session.iduser){
        res.render('home', {
            balance: getBalanceETH(req.session.publicKey),
            title: 'Welcome',            
            name: req.session.username
        })
    }
    else{
        res.send('<script> alert("The user does not exist or you entered a wrong password"); window.location.href = "/"; </script>');  
    }
    
}

module.exports = {renderLogin, renderRegister, renderTransaction, renderHomepage}