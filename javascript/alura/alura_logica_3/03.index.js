//classe = modelo de estrutura

class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){  //condicao que impede o saque caso o valorSacado seja maior que o saldo em contaCorrente
            this.saldo -= valor; //subtrai o valorSacado do contaCorrenteCliente1.saldo > "-100"
        }
    } //operacao dentro da classe
}

const cliente1 = new Cliente();
cliente1.nome = "Fabio";
cliente1.cpf = 11122233309;
console.log(cliente1);

const cliente2 = new Cliente();
cliente2.nome = "Daiane";
cliente2.cpf = 88822233309;
console.log(cliente2);
console.log(cliente2.cpf);

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.saldo = 0; //saldo inicial de 0
console.log(contaCorrenteCliente1.saldo);

contaCorrenteCliente1.saldo = 100; //deposito de 100 reais
console.log(contaCorrenteCliente1.saldo);
contaCorrenteCliente1.sacar(200); //neste caso o saldo permanecera 100 pois, o limite de saque é somente se o valor for igual ou menor que o valor atual....
console.log(contaCorrenteCliente1.saldo);