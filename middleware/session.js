const session = require('express-session')

const sessionInfo = session({
    secret: 'secretpass',
    saveUninitialized: true,
    resave: false
})

module.exports = {sessionInfo}