export class account {
    private _accountNumber: number;
    private _balance: number;

    constructor(z: number) {
        this._accountNumber = z;
        this._balance = 0;
    }

    public withdraw(sum: number) {
        if (sum>0)
            this._balance -= sum;
        else
            console.log('Account withdraw error');
    }
    public deposit(sum: number) {
        if (sum>0) {
            this._balance += sum;
        else
            console.log('Account deposit error');
        }
    }
    get accountNumber(): number {
        return this._accountNumber;
    }
    get balance(): number {
        return this._balance;
    }

}

export class SavingAccount {
    private _account: number;
    private _interest: number;

    constructor(y: number) {
        this._account = y;
        this._interest = 0;
    }

    public addInterest(sum: number) {
        if (sum>0) {
            this._interest += sum;
        }
    }

}


