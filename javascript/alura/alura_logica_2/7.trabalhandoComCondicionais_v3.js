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

console.log("");
console.log(`Idade do Comprador: ${idadeComprador}`);
console.log(`Está acompanhado? ${estaAcompanhado}`);

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Comprador maior de idade ou está acompanhado. Vendida a passagem para São Paulo.");;
    listaDeDestinos.splice(1,1); //Remove São Paulo da lista porque a venda dessa passagem foi realizada
    console.log("");
    console.log("Destinos possíveis:");
} else { // A pessoa é menor de idade
    console.log("Não é maior de Idade e não está acompanhado. Então não posso vender!!");
    console.log("");
    console.log("Destinos possíveis:");
}

console.log(listaDeDestinos);
