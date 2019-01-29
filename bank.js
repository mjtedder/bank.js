// Require fs
const fs = require('fs')

const action = process.argv[2]
const value = process.argv[3]

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
        data = data.split(',')
        let result = 0
        for (i=0; i < data.length; i++) {
            if(parseFloat(data[i])) {
                result += parseFloat(data[i])
            }
        }
        console.log('Your balance is: ' + result)
    })
}

// DEPOSIT <number> - add positive amount to balance
function deposit() {
    fs.appendFile('bank.txt', ', ' + value, 'utf8', (err) => {
        if (err) throw err
        console.log('Deposit added!')
    })
    total()
}


// WITHDRAW <number> - add negative amount to balance

// LOTTO - subtract 5 from amount, if random number is hit add back larger number

// Append all transatctions to bank.txt file




// IF TIME PERMITS======================

// Add a way to always display total after a transaction

// Warning if user withdraws more money than is in the account

// Transaction history?