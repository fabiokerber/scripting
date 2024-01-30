//classe = modelo de estrutura

class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Fabio";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Daiane";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1,cliente2);
console.log(cliente2.nome);

//classe = modelo de estrutura