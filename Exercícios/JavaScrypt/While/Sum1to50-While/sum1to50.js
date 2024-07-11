/*
    Objetivo: Somar os números de 1 a 50, o resultado tem que ser 1275

    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

    1 - Preciso criar uma variável x que será vazia para se somar todos os números nela

    2 - Precisamos criar um valor que irá adicionar 1 ao seu valor a cada loop(++), a variável n = 0

    3 - Criar uma variável (results) onde será relacionada a div do resultados

    4 - criar um loop while com o seguinte parâmetro (n <= 50)

    5 - Na estrutura colocar uma variável (soma) responsável pelo resultado: x += n, n++

    6 - Criar uma variável que será responsável por criar um novo elemento (parágrafo)

    7 - Colocar o texto interno do parágrafo exibindo a variável soma

    8 - Relacionar o parag como filho da tag div com id imput

*/

var x = 0
var n = 0

var results = document.getElementById('output')

while(n <=50){
    let soma = x+=n
    n++
    const parag = document.createElement('p')
    parag.innerText = soma
    results.appendChild(parag)
}