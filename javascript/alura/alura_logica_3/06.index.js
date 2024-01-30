//importa a função Cliente do arquivo
import {Cliente} from "./Cliente_06.js" 
import {ContaCorrente} from "./ContaCorrente_06.js"

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
contaCorrenteCliente1.sacar(50); //saque de 50 reais
console.log(contaCorrenteCliente1.saldo);