const {verify_user, verify_email , add_user_db} = require('../models/connectUserDb');
const {createEthereumWallet} = require('../utils/createWallet')
const {add_Wallet} = require('../models/connectWalletDb')

// La función getUserLogin es asincrona y espera el resultado de la promesa de verify_user
const getUserLogin = async(req,res) => {
    const {email , password } = req.body;    
    result = await verify_user(email,password);
    if (result[0].length !== 0){    
        req.session.iduser = result[0][0].iduser;                      
        req.session.username =  result[0][0].username;        
        res.status(200).redirect('/home?authenticated=true');
    }
    else{
        res.status(401).redirect('/home')
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
            let id = await add_user_db(name,email,password);                     
            let cartera;
            if(ethereum === 'on'){
                console.log("yes");
                cartera = await createEthereumWallet();
                id = id[0][0].iduser;
                console.log(JSON.stringify(cartera[2][0]));
                await add_Wallet(id,'eth', cartera[2][0]);
                res.send(`<script> alert("The account has been created with an ethereum wallet encrypted using this password: ${cartera[1]} \\nStore it in a safe place!"); window.location.href = "/"; </script>`)
            }
            else{
                res.send('<script> alert("The account has been created with no wallets"); window.location.href = "/"; </script>');               }
            
            
        }
    }else
        res.send('<script> alert("The email is already registered"); window.location.href = "/register"; </script>');    
}

module.exports = {getUserLogin, registerUser}; 