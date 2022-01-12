const mysql = require('mysql2');

const verify_user = (username, hashedPassword) => {
    return new Promise((resolve,reject)=>{
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'EDIT_CRYPTO_USER',
            password: '123',
            database: 'CryptoUNAL'
        });
        
        connection.query( `call retrieve_user_data("${username}", "${hashedPassword}")`, ( err, rows ) => {
            if ( err ){
                connection.end();
                reject( err );
            }
            else{
                connection.end();
                resolve( rows );
            }
        });
    }).then((rows) => console.log(rows)).catch((err) => console.log(err));
};




module.exports = {verify_user};