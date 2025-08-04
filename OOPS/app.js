function BankAccount(custumerName, balance = 0) {
    this.custumerName = custumerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposite = function (amount) {
        this.balance += amount;
    }

    this.withdraw = function (amount) {
        this.balance -= amount;
    }
}

// const satyamAccount = new BankAccount('Satyam Agrahari', 1000);
// const johnAccount = new BankAccount('John Tiwari')
// satyamAccount.deposite(2500);
// johnAccount.deposite(1000);
// satyamAccount.withdraw(500);
// console.log(satyamAccount, johnAccount);

const account = [];
const accountForm = document.querySelector('#accountForm');
const custumerName = document.querySelector('#customerName')
const balance = document.querySelector('#balance')

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const satyamAccount = new BankAccount(custumerName.value, +balance.value);
    account.push(satyamAccount);
    console.log(satyamAccount);
})

const depositeForm = document.querySelector('#depositeForm');
const accountNumber = document.querySelector('#accountNumber')
const amount = document.querySelector('#amount')

depositeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const accounts = account.find(
        (accounts) => accounts.accountNumber === +accountNumber.value
    )
    accounts.deposite(+amount.value);
    console.log(accounts);
})
