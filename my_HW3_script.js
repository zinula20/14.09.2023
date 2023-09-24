class BankAccount {
    constructor (account_number, account_holder, account_balance, account_type) {
        this.account_number = account_number,
        this.account_holder = account_holder,
        this.account_balance = account_balance,
        this.account_type = account_type 
    }
    set_account_number(account_number) {
        this.account_number = account_number
    }
    set_account_holder(account_holder) {
        this.account_holder = account_holder
    }
    set_account_balance(account_balance) {
        this.account_balance = account_balance
    }
    set_account_type(account_type) {
        this.account_type = account_type
    }

}

    const account_number = parseInt(prompt(`Account number: `));
    const account_holder = prompt(`Account holder: `);
    const account_balance = parseFloat(prompt(`Account balance: `));
    const account_type = prompt(`Account type: `);

    const bankAc1 = new BankAccount (account_number, account_holder, account_balance, account_type)
    console.log("Number:", bankAc1.account_number);
    console.log("Holder:", bankAc1.account_holder);
    console.log("Balance:", bankAc1.account_balance);
    console.log("Type:", bankAc1.account_type);

    const numberUp = parseInt(prompt(`Account number: `));
    const holderUp = prompt(`Account holder: `);
    const balanceUp = parseFloat(prompt(`Account balance: `));
    const typeUp = prompt(`Account type: `);

    bankAc1.set_account_number(numberUp);
    bankAc1.set_account_holder(holderUp);
    bankAc1.set_account_balance(balanceUp);
    bankAc1.set_account_type(typeUp);

    console.log("Number:", bankAc1.account_number);
    console.log("Holder:", bankAc1.account_holder);
    console.log("Balance:", bankAc1.account_balance);
    console.log("Type:", bankAc1.account_type);
