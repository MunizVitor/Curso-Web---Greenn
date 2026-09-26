console.log("TESTE")

//LAÇO DE REPETIÇÃO FOR
console.log("Laço de repetição FOR");
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
console.log("Laço de repetição FOR");
//LAÇO DE REPETIÇÃO FOR

//LAÇO DE REPETIÇÃO WHILE
console.log("Laço de repetição WHILE");
let i = 0;
while (i <= 5) {
    console.log(i);
    //i++ || i + 1
    i++;
}
console.log("Laço de repetição WHILE");
//LAÇO DE REPETIÇÃO WHILE

//LAÇO DE REPETIÇÃO DO WHILE
console.log("Laço de repetição DO WHILE");
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 5)
    console.log("Laço de repetição DO WHILE");
//LAÇO DE REPETIÇÃO DO WHILE

//LAÇO DE REPETIÇÃO FOR IN
const pessoa = {
    nome: "Thiago",
    idade: 28
}

console.log(pessoa)

for(const key in pessoa){
    console.log(key, pessoa[key]);
}
//LAÇO DE REPETIÇÃO FOR IN

//LAÇO DE REPETIÇÃO FOR OF
const frutas = ["banana", "maça", "uva"]
for (const element of frutas) {
    console.log(element);
}

const arr = [0, 1, 2, 3];
for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for (const element of arr) {
    console.log(element);
}
//LAÇO DE REPETIÇÃO FOR OF

//BREAK
for(let index = 0; index <= 10; index++){
    if(index === 5){
        console.log("Index é igual a 5 então pare!!!")
        break;
    }
    console.log(index);
}

for(let numero = 0; numero <= 10; numero++){
    if(numero % 2 == 0){
        console.log("É um número par")
        continue;
    }
    console.log(numero);
}
//BREAK

//LAÇO DE REPETIÇÃO IF
let idade = 25
if(idade <= 30){
    console.log("Idade e menor do que trinta");
}

idade = 30

if(idade <= 29){
    console.log("Idade e maior do que vinte e nove");
}
//LAÇO DE REPETIÇÃO IF

//LAÇO DE REPETIÇÃO IF-ELSE
let nota = window.prompt("Digite sua nota: ");

if(nota > 6){
    console.log("Aluno Aprovado");
    window.alert("Aluno em Recuperação");
} else if(nota < 5){
    console.log("Aluno em Recuperação");
    window.alert("Aluno em Recuperação");
} else {
    console.log("Aluno Reprovado");
    window.alert("Aluno Reprovado");
}
//LAÇO DE REPETIÇÃO IF-ELSE

//LAÇO DE REPETIÇÃO DE SWITCH
let diaSemana = "Segunda-Feira"

switch(diaSemana){
    case "Segunda-Feira":
        console.log("Dia útil - Segunda-Feira");
    break;
    case"Terça-Feira":
        console.log("Dia útil - Terça-Feira");
    break;
        case"Quarta-Feira":
        console.log("Dia útil - Quarta-Feira");
    break;
        case"Quinta-Feira":
        console.log("Dia útil - Quinta-Feira");
    break;
        case"Sexta-Feira":
        console.log("Dia útil - Sexta-Feira");
    break;
    default:
        "Fim de Semana"
    break
}
//LAÇO DE REPETIÇÃO DO SWITCH

//Operadores Lógicos
function acessoLiberado() {
    console.log("Acesso Liberado");
}

function acessoNegado() {
    console.log("Acesso Negado");
}

function liberarAcesso(pessoaEvento){

    if (pessoaEvento.possuiAcesso || (pessoaEvento.idade >= 18 && pessoaEvento.possuiIngresso && pessoaEvento.possuiDocumento)){
        acessoLiberado();
    } else {
        acessoNegado();
    }
}

const pessoaEvento = {
    nome: "Bob",
    idade: 20,
    possuiDocumento: true,
    possuiIngresso: true,
    possuiAcesso: true
}

console.log(pessoa);
liberarAcesso(pessoa)

pessoa.idade = 16;
pessoa.possuiAcesso = !pessoaEvento.possuiAcesso

console.log(pessoa);
liberarAcesso(pessoa);

