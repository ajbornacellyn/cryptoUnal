const mysql = require('mysql2');

const add_Wallet = (username, crypto, encryptedWallet) => {
    // Promesa de la conexión a base de datos y la query de sql
    return new Promise((resolve,reject)=>{
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'EDIT_CRYPTO_USER',
            password: '123',
            database: 'CryptoUNAL'
        });
        
        connection.query( `call createWallet(${username}, "${crypto}", ${encryptedWallet} )`, ( err, rows ) => {
            if ( err ){
                connection.end();
                reject( err );
            }
            else{
                connection.end();
                resolve( rows );
            }
        });
    }).then(rows => rows).catch((err) => console.log(err));
};


module.exports = {add_Wallet};