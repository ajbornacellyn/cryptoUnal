const {verify_user, verify_email , add_user_db} = require('../models/connectUserDb')

// La función getUserLogin es asincrona y espera el resultado de la promesa de verify_user
const getUserLogin = async(req,res) => {
    const {email , password } = req.body;    
    result = await verify_user(email,password);
    if (result[0].length !== 0){        
        req.session.userid = email;            
        res.status(200).json({email,password});
    }
    else{
        res.send('<script> alert("The user does not exist or you entered a wrong password"); window.location.href = "/"; </script>');  
    }    
}

const registerUser = async(req,res) => {
    const {name, email, password, password_confirmation, bitcoin, ethereum} = req.body;
    result = await verify_email(email);    
    if (result[0].length === 0){
        if (password !== password_confirmation){
            res.send('<script> alert("The password confirmation does not match"); window.location.href = "/register"; </script>');        
        }        
        else{
            add_user_db(name,email,password);
            res.send('<script> alert("The account has been created"); window.location.href = "/"; </script>');   
        }
    }else
        res.send('<script> alert("The email is already registered"); window.location.href = "/register"; </script>');    
}

module.exports = {getUserLogin, registerUser}; 