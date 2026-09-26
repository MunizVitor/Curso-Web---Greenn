//JS é uma lnguagem de tipagem fraca, ou seja, não é necessário declarar o tipo da variável, o JS faz isso automaticamente.
window.alert("teste");

function exibirDetalhesConst(dado) {
    const informacao = dado
    console.log("A dado informado foi: ", informacao);
    console.log ("O tipo do dado informada foi: ", typeof informacao);
}

//var: redefinida e reatribuida
//Variaveis
function exibirDetalhesIdade(idade) {
    console.log("A dado informado foi: ", idade);
    console.log ("O tipo do dado informada foi: ", typeof idade);
}

var idade = window.prompt("Deseja sua idade?");
exibirDetalhesIdade(idade);
var idade = 25;
exibirDetalhesIdade(idade);


//let: Não pode ser redefinida, mas pode ser reatribuida
function exibirDetalhesName(dado) {
    let name = dado
    console.log("A dado informado foi: ", name);
    console.log ("O tipo do dado informada foi: ", typeof name);
}

let name = window.prompt("Qual é o seu nome?");
exibirDetalhesName(name);

name = "Vitor";
exibirDetalhesName(name);


//const: Não pode ser redefinida ou nem redeclarada
const estado = window.prompt("Qual é o seu estado?");
exibirDetalhesConst(estado);

//estado = "São Paulo";