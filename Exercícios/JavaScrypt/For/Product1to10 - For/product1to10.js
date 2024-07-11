/*
    Objetivo:

    -Multiplicar os números de 1 a 10, o resultado tem que ser 3.628.800

    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

    1 - Criar uma variável de resultado se relacionando com a div

    2 - Criar uma outra variável com o valor 0 (secnum)

    3 - Criar um loop for com uma variável que começa com 1, a condição de ser menor ou igual a 10, o complemento de adicionar 1(++) a cada loop na variável

    4 - [Opcional] Criar uma variável de multiplicação(multi) para relacionar com a operação matemática

    5 - Criar um novo elemento no HTML <p> (Parágrafo) relacionando com uma variável parag

    6 - Pegar o texto interno dessa variável parag e relacionar com o valor de secnum

    7 - Colocar a tag <p> como filha da div pai com o appendChild()
*/

var result = document.getElementById('output')
var secnum = 1

for(let num = 1; num <= 10 ; num++){
    const multi = secnum *= num //secnum *= num || secnum = secnum * num
    const parag = document.createElement('p')
    parag.textContent = multi
    result.appendChild(parag)
}