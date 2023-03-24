### Exercise 1

- Create a class Account that represents a bank,
this class should keep track of the balance of 
the account, and the account number. 

The Account should allow to withdraw and deposit,
so create the necessary methods, both of these
  methods should accept only positive values. 
There should be a way to retrieve the balance, 
and the account number. 
The balance can only be modified with the methods
provided, the account number cannot be modified.

- Create a SavingsAccount class that has Account
as base class, SavingsAccounts keep track of an 
interest that will be used to add interest to
the account. There must be a way to add the 
interest to the account.

- Create a CurrentAccount class that has Account
as base class,CurrentAccount have an overdraft 
limit.

- Create a Bank class, it will be in charge of 
many Account. The accounts will be instances of 
the Account class, the SavingsAccount class, 
or the CurrentAccount class.

    - provide an update method which will affect
  the accounts in the following way
        - Savings accounts will have the 
      interest added to them.
        - CurrentAccounts will get a letter if 
      they are in overdraft, that is the balance
      is below the overdraft limit.
      
    - Add methods to open a new account and to
  close an existing one.
    - Add a method to pay a dividend to each 
  account.
