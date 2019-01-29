// Require fs
const fs = require('fs')

let action = process.argv[2]
let value = process.argv[3]

// TRANSACTIONS EXECUTION ===================================

// Use if-else or switch-case statements for these

switch(action) {
    case 'total':
    total()
    break

    case 'deposit':
    deposit()
    break

    case 'withdraw':
    withdraw()
    break

    case 'lotto':
    lotto()
    break
}

// DEFINING FUNCTIONS ===================================================

// TOTAL - tally up all the money in the bank balace and display for user
function total() {
    fs.readFile('bank.txt', 'utf8', function(err, data) {
        if (err) throw err;
    })
}
// DEPOSIT <number> - add positive amount to balance

// WITHDRAW <number> - add negative amount to balance

// LOTTO - subtract 5 from amount, if random number is hit add back larger number

// Append all transatctions to bank.txt file




// IF TIME PERMITS======================

// Add a way to always display total after a transaction

// Warning if user withdraws more money than is in the account

// Transaction history?