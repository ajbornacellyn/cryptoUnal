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
        
        wallet = JSON.stringify(encryptedWallet);

        query = `INSERT INTO wallets (wallet_address, type, users_iduser) values ('${wallet}', "${crypto}", ${username});`

        connection.query( query, ( err, rows ) => {
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
const get_Wallet = (id) => {
    return new Promise((resolve,reject)=>{
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'EDIT_CRYPTO_USER',
            password: '123',
            database: 'CryptoUNAL'
        });        
        
        connection.query( `CALL get_encryptedwallet(${id})`, ( err, rows ) => {
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
}

module.exports = {add_Wallet, get_Wallet};