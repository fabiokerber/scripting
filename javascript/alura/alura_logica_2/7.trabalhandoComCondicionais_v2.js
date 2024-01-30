console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)

const idadeComprador = 10;
const estaAcompanhado = false;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //Remove São Paulo da lista porque a venda dessa passagem foi realizada
} else { // A pessoa é menor de idade
    if (estaAcompanhado) { //verifica se a pessoa sendo menor de idade está acompanhada. Não precisa colocar o == true, pq é "default"
        console.log("Comprador está acompanhado.");
        listaDeDestinos.splice(1, 1); //Remove São Paulo da lista porque a venda dessa passagem foi realizada
    } else {
        console.log("Não é maior de Idade e não está acompanhado. Então não posso vender!!");
    }
}



console.log(listaDeDestinos);
