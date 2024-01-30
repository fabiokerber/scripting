console.log(`Trabalhando com listas`);
// seleciona todas as linhas e ctrl + k + c > comenta as linhas selecionadas
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`) //"Empurra" Curitiba à listaDeDestinos
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1) //Remove a posição 2 e 1 elemento. Neste caso São Paulo

console.log(listaDeDestinos);

console.log(listaDeDestinos[1] + " e " +listaDeDestinos[2]); //Imprime somente o Rio de Janeiro e Curitiba