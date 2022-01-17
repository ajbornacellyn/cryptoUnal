const Web3 = require('web3');

ganacheNode = 'HTTP://127.0.0.1:7545';
web3 = new Web3(ganacheNode);

function getBalanceETH(address) {
    let balance = web3.eth.getBalance(address);
    return balance;
};

module.exports = {getBalanceETH}