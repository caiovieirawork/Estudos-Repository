/*
    Objetivo:

    -Fazer a tabuada do 5 de 1 a 10

    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

    1 - Primeiro criamos uma variável de resultado e relacionamos com a div que sairá os resultados no HTML

    2 - Criamos uma variável com o valor 5

    3 - Fazer uma estrutura for com um número de valor 1, condição ser menor ou igual a 10 e fazer ele adicionar um a cada loop(++)

    4 - Criar uma variável para fazer a multiplicação e colocar o cálculo

    5 - Criar um elemento parágrafo

    6 - Relacionar esse parágrafo com os resultados

    7 - Adicionar o parágrafo como filho de resultados
*/

var results = document.getElementById('output')

var factor = 5

for(let num = 1; num <=10; num++){
    const multi = `${factor} x ${num} = ${factor * num}`
    
    var parag = document.createElement('p')
    parag.textContent = multi
    results.appendChild(parag)
}