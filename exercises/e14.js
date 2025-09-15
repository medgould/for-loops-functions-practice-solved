
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data.js";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...

  let wrongBalanceAccounts = [];

  for (let i = 0; i < array.length; i++) {
    let deposits = array[i].deposits;
    let withdrawals = array[i].withdrawals;
    let balance = array[i].balance;
    
    let totalDeposits = 0;  
    let totalWithdrawals = 0;

    if (Array.isArray(deposits)) {
      for (let j = 0; j < deposits.length; j++) {
        totalDeposits += deposits[j];
      }
    }

    if (Array.isArray(withdrawals)) {
      for (let k = 0; k < withdrawals.length; k++) {
        totalWithdrawals += withdrawals[k];
      }
    }
    
    let calculatedBalance = totalDeposits - totalWithdrawals;

    if (calculatedBalance !== balance) {
      wrongBalanceAccounts.push(array[i]);
    }
  }

  return wrongBalanceAccounts;           
}

console.log(getClientsWithWrongBalance(bankAccounts));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
