const {verify_user} = require('../models/connectUserDb')

const getUserLogin = async(req,res, next) => {
    const {email , password } = req.body;
    // console.log(`Welcome ${email} with password ${password}`);
    await verify_user(email,password);
    next();
}

module.exports = {getUserLogin};