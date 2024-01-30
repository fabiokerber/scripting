console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

let podeComprar = false;
const idadeComprador = 10;
const estaAcompanhado = true;
let destinoExiste = false;
const destino = "Aracaju";
let contador = 0;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

console.log(`Idade do Comprador: ${idadeComprador}`);
console.log(`Está acompanhado? ${estaAcompanhado}`);

if (podeComprar = (idadeComprador >= 18 || estaAcompanhado == true));


if (podeComprar == true){ //Permissão de comprar ser maior de idade e estar acompanhado
    while (contador <= 4) { //4 tamanho da listaDeDestinos
        if (listaDeDestinos[contador] == destino){ //condição abaixo se o valor da variavel destino é igual à algum item da lista.
            console.log(`\n Destino ${destino} existe.`);
            destinoExiste = true;
            break;
        } else {
            console.log(`A passagem não deverá ser vendida devido à inexistência do destino.`);
        }
        contador ++;
    }
} else {
    console.log(`A passagem não deverá ser vendida devido à restrições de idade ou estar acompanhado.`);
}


