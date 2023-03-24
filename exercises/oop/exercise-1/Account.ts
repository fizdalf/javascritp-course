export class Account {
    private _balance: number;  //The current balance
    private _accountNumber: number;  //The account number


    constructor(a: number) {
        this._balance = 0.0;
        this._accountNumber = a;
    }

    public deposit(sum: number) {
        if (sum > 0)
            this._balance += sum;
        else
            console.error("Account.deposit(...): cannot deposit negative amount.");
    }

    public withdraw(sum: number) {
        if (sum > 0)
            this._balance -= sum;
        else
            console.error("Account.withdraw(...): cannot withdraw negative amount.");
    }

    get balance(): number {
        return this._balance;
    }

    get accountNumber(): number {
        return this._accountNumber;
    }

    public toString(): string {
        return "Acc " + this._accountNumber + ": " + "balance = " + this._balance;
    }

    public print(): void {
        //Don't override this,
        //override the toString method
        console.log(this.toString());
    }

}
