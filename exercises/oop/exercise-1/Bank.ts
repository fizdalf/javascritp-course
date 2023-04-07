interface withdrawMoney {
    withdraw: () => void;
}

 interface depositMoney {
    deposit: () => void;
}
interface canRegister{
    register:()=> void
}


export class Bank implements withdrawMoney, depositMoney, canRegister {

 my

   withdraw(){
        this.allow_Witdraw()
       console.log('ah retirado x cantidad de dinero ')
    }

    accountNumber(){

       console.log('Puede registrarce aqui')
    }



private allow_Witdraw(){
       this.balance < 30000;
}

  protected  deposit(): number {
        return 0;
    }

    register(): void {
    }

}