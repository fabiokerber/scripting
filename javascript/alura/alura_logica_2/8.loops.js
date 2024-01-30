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
let temPassagemComprada = false;
const destino = "Rio de Janeiro";
let contador = 0;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

console.log(`Idade do Comprador: ${idadeComprador}`);
console.log(`Está acompanhado? ${estaAcompanhado}`);

if (podeComprar = (idadeComprador >= 18 || estaAcompanhado == true));


if (podeComprar == true){ //Permissão de comprar ser maior de idade e estar acompanhado
    while (contador < 4) { //4 tamanho da listaDeDestinos
        if (listaDeDestinos[contador] == destino){ //condição abaixo se o valor da variavel destino é igual à algum item da lista.
            console.log(`\n Destino ${destino} existe.`);
            break;
        } else {
            console.log(`\n O destino ${destino} não existe.`);
        }
        contador ++;
    }
} else {
    console.log(`A passagem não deverá ser vendida devido à restrições.`);
}

