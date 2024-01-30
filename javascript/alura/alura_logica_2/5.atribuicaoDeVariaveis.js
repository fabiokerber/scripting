console.log("Trabalhando com Atribuição de variáveis.")

const idade = 34; //declaracao de variavel do tipo constante que não pode ser alterada
let primeiroNome = "Fabio"; //declaracao de variavel do tipo let que pode ser alteradada
const sobrenome = "Kerber";
let ano = 2021; 

console.log(primeiroNome, sobrenome); //virgula separa os valores ao exibí-los
console.log(primeiroNome + " " + sobrenome);
console.log(`Exibindo texto com crase ${primeiroNome} ${sobrenome}`); //interpolação de variáveis, funciona com a versao mais nova do JavaScript

nomeCompleto = primeiroNome + sobrenome; //nao é preciso usar o const ou let, pois já foi declarado acima
console.log(nomeCompleto);