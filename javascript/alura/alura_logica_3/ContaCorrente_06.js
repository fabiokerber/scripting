export class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){ //operacao dentro da classe
        if(this.saldo >= valor){  //condicao que impede o saque caso o valorSacado seja maior que o saldo em contaCorrente
            this.saldo -= valor; //subtrai o valorSacado do contaCorrenteCliente1.saldo > "-100"
        }
    }
    
    depositar(valor){ //operacao dentro da classe
        if(valor > 0) //permite o deposito somente se o valor informado for maior que zero
            this.valor += valor;
    }
}