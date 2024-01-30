console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
)

const idadeComprador = 20;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //Remove São Paulo da lista porque a venda dessa passagem foi realizada
} else {
    console.log("Não é maior de Idade e não posso vender")
}



console.log(listaDeDestinos);
