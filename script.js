// Resolucao do Exercicio 3

var num1 = prompt("Digite o primeiro número: ");
var num2 = prompt("Digite o primeiro número: ");

var soma = parseInt(num1) + parseInt(num2);
var subtracao = parseInt(num1) - parseInt(num2);
var multiplicacao = parseInt(num1) * parseInt(num2);
var divisao = parseInt(num1) / parseInt(num2);


gerarResultado();

function gerarResultado() {
    document.getElementById("Soma").innerHTML += num1 + " + " + num2 + " = ";
    document.getElementById("Sub").innerHTML += num1 + " - " + num2 + " = ";
    document.getElementById("Div").innerHTML += num1 + " / " + num2 + " = ";
    document.getElementById("Mult").innerHTML += num1 + " * " + num2 + " = ";

    document.getElementById("ResultadoSoma").innerHTML += soma;
    document.getElementById("ResultadoSub").innerHTML += subtracao;
    document.getElementById("ResultadoDiv").innerHTML += multiplicacao;
    document.getElementById("ResultadoMult").innerHTML += divisao;
}


// Resolucao do Exercicio 2


function limparNumeros() {
    document.getElementById("Soma").innerHTML = "";
    document.getElementById("Sub").innerHTML = "";
    document.getElementById("Div").innerHTML = "";
    document.getElementById("Mult").innerHTML = "";

    document.getElementById("ResultadoSoma").innerHTML = "";
    document.getElementById("ResultadoSub").innerHTML = "";
    document.getElementById("ResultadoDiv").innerHTML = "";
    document.getElementById("ResultadoMult").innerHTML = "";
}


// Resolucao do Exercicio 3

var numeros = [];

for (i = 0; i < 5; i++) {
    var nums = prompt(parseInt("Digite um número: "));
    numeros.push(nums);
}

function maiorNumero(numeros) {
    console.log(Math.max.apply(null, numeros));
}
