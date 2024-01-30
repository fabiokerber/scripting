//classe = modelo de estrutura

class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
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

//Cadastro
const cliente1 = new Cliente();
cliente1.nome = "Fabio";
cliente1.cpf = 11122233309;
console.log(cliente1);

const cliente2 = new Cliente();
cliente2.nome = "Daiane";
cliente2.cpf = 88822233309;
console.log(cliente2);
console.log(cliente2.cpf);

//Abertura de ContaCorrente
const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.saldo = 0; //saldo inicial de 0
console.log(contaCorrenteCliente1.saldo);

const contaCorrenteCliente2 = new ContaCorrente();
contaCorrenteCliente2.agencia = 1001;
contaCorrenteCliente2.saldo = 0; //saldo inicial de 0
console.log(contaCorrenteCliente2.saldo);

//Transações ContaCorrenteCliente1
contaCorrenteCliente1.depositar(100); //deposito de 100 reais
contaCorrenteCliente1.depositar(200); //deposito de 200 reais
contaCorrenteCliente1.depositar(-1); //nao sera feito o deposito negativo devivo a condição criada no "depositar"
console.log(contaCorrenteCliente1.saldo);
contaCorrenteCliente1.sacar(50); 
console.log(contaCorrenteCliente1.saldo);