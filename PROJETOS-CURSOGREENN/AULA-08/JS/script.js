function exibeValores(nomeVariavel, variavel) {
    console.log(`${nomeVariavel}: `, variavel, typeof variavel)
}

const nome = "João";
const idade = 30;
const estaAtivo = true;
const autor = null;

exibeValores("Nome:", nome);
exibeValores("Idade:", idade);
exibeValores("Esta Ativo:", estaAtivo);
exibeValores("Autor:", autor);
exibeValores("Decimal:", 12.50)

const aluno = {
    "nome": "Felipe",
    "idade": 25,
    "saldo": -2500.32
}

exibeValores("Aluno: ", aluno);

aluno.nome = "Felipe Silva";
aluno.idade = 26;
aluno.estaAtivo = true;

exibeValores("Aluno: ", aluno);
exibeValores("Aluno: ", aluno);

console.log(Math.abs(aluno.saldo));
console.log(Math.round(aluno.saldo));
console.log(Math.ceil(aluno.saldo));

aluno.saldo = Math.abs(aluno.saldo);
console.log(aluno.saldo);

const date = new Date();

console.log(date.getDate());//Aqui ele traz o dia do mês, ou seja, de 1 a 31
console.log(date.getDay());//Neste caso ele apenas traz o INDICE da semana, sendo 0 = Domingo, 1 = Segunda, 2 = Terça, 3 = Quarta, 4 = Quinta, 5 = Sexta e 6 = Sábado

const numeros = [5, 10, 15, 20];
const frutas = ["banana", "maça", "laranja", "uva"];

console.log(numeros);
console.log(numeros.sort());

console.log(frutas.find("banana"));
console.log(frutas.find((item) => item === "banana"));

console.log(frutas.find((item) => {
   return item === "uva";
}));


console.log(aluno);
console.log(JSON.stringify(aluno));

let num1 = 25;
let num2 = 10;

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 + num2);
console.log(num1 - num2);

const estoque = new Map();

estoque.set("maçã", 10);
estoque.set("banana", 5);
estoque.set("laranja", 8);
console.log(estoque);

console.log(estoque.get("maçã"));
console.log(estoque.has("laranja"));

const nomes = ["Anabele", "Ana-Flavia", "Bruna", "Carla", "Daniela", "Fernanda", "Juliana", "Larissa", "Letícia", "Mariana", "Patrícia", "Patrícia", "Priscila", "Rafaela"];
console.log(nomes);

const unicos = [...new Set(nomes)]; // speed
console.log(unicos);


const notas = [9, 4, 7, 6];
console.log(notas);
console.log(
    notas.filter((nota) => nota >= 6)
);

console.log(notas.reduce((acumulador, nota) => acumulador + nota, 0));