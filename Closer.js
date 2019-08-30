// Balance var is in locals closer and its illigal ocupation 

var balance = 0;

function deposit(amount) {
    balance += amount;
}

function withdraw(amount) {
    balance -= amount;
}

function print() {
    console.log(balance);
}

deposit(200);
withdraw(50);
print();

// Use Class for eliminate closer / illegal Occupation

class Banking {
    constructor() {
        this.balance1 = 0;
    }

    deposit(amount1) {
        this.balance1 += amount1;
    }

    withdraw(amount1) {
        this.balance1 -= amount1;
    }

    print() {
        console.log(this.balance1);
    }
}

let a = new Banking();
a.deposit(200);
a.withdraw(100);
a.print();