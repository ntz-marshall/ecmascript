// versão não funcional
let numeros = [3,2,11,20,8,7]

let numbers = []

numeros.forEach(item => {
if (item % 2) {
    numbers.push(item * 2)
} else {
    numbers.push(item)
}
})

console.log (numbers)

// versão com if ternário

let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item)

console.log(novosNumeros)
/*
Veja que usamos um if ternário para decidir se retornamos o item multiplicado por 
2 ou o item em si. Um outro ponto importante é o seguinte: 0 é considerado falso 
em JavaScript e qualquer número diferente de 0 é considerado verdadeiro.
Então, quando fazemos item % 2, se o resultado for 0, é porque o item é divisível por
dois, ou seja, é par. Como 0 é falso, ele retornará o item sem qualquer modificação.
Agora, se o resto da divisão de item % 2 for diferente de zero, é porque é impar.
Como o resultado é diferente de zero, será verdadeiro e o que vem depois do interrogação
será processado, no caso, item vezes dois.

Outra maneira de se conseguir o mesmo resultado,
sem entretanto utilizar o operador ternário, é:
*/

let nuevosNumeros = numeros.map((item)=> (item%2 +1 ) * item)
console.log(nuevosNumeros)

/*
Quando fazemos o módulo de dois um número par, o que sobra é 0, somando-se 1, 
e depois multiplicando pelo item, obtemos o mesmo item. Quando o número é impar, 
o modulo obtido é um, o qual incrementado dá 2.
*/


/* ~ Exemplo de spread operator ~ */

function somaDoisNumeros(numero1, numero2) {
return numero1 + numero2                                   
}

console.log(somaDoisNumeros(10,30)) // exibe 40!

let num = [10, 30]
console.log(somaDoisNumeros(num[0], num[1]))

numeros = [10,30]
console.log(somaDoisNumeros(...numeros))

/* ~ Exemplo de filtro nome aluno ~ */
// Alterando para arrow functions

// classe para construir a matricula do aluno
class Aluno {

constructor(matricula, nome) {
    this.matricula = matricula
    this.nome = nome
}
}

// classe para construir a nota e atrelar ao aluno
class Prova {

constructor(aluno, nota) {
    this.aluno = aluno
    this.nota = nota
}
}

// cria a matricula do aluno e sua nota da prova
let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
]

// filtra os alunos pela nota maior que 7, e retorna apenas seus nomes
let aprovados = avaliacoes
.filter((prova) =>  prova.nota >= 7)
.map((prova) =>  prova.aluno.nome)

console.log(aprovados)

// versão com function

let aprovs = avaliacoes
.filter(function(prova) { return prova.nota >= 7; })
.map(function(prova) { return prova.aluno.nome;}) 

console.log(aprovs)

/* ~ RegEx ~ */
// fazer uma classe
function validaCodigo(codigo) {

// cria a expressão regular. Poderíamos ter usado 
// a sintaxe new RegExp(/\D{3}-\D{2}-\d{2}/)
// \D é qualquer coisa não dígito
// \D{3} é qualquer coisa não dígito que forme um grupo de 3 caracteres
// \d é qualquer dígito.
let expressao = /\D{3}-\D{2}-\d{2}/; 

// toda expressão regular possui o método test 
// que recebe o alvo do teste, retornando true
// se passou, e false se falhou
if(expressao.test(codigo)) {
        alert('Código válido!');
    } else {
        alert('Código inválido');
    }

}

validaCodigo('GWZ-JJ-12'); // válido
validaCodigo('1X1-JJ-12'); // inválido


/* .concat */

function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = [];

listaDeNomes1.forEach(item => lista.push(item));
listaDeNomes2.forEach(item => lista.push(item));

exibeNoConsole(lista);

//////////////

let listNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let list = listNomes1.concat(listNomes2);

exibeNoConsole(list);

////////////////////

let lisNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let lisNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole([].concat(lisNomes1, lisNomes2));

////////////////////

let listDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole([].concat(listDeNomes1, listDeNomes2, 'Rômulo'));