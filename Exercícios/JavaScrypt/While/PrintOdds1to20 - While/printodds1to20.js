/*
    Objetivo: Mostrar todos os números ímpares de 1 a 20

    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

    1 - Criar uma variável x que comece com 1

    2 - Criar uma variável de resultados relacionando com a div com id output

    3 - Criar uma estrutura while com a condição (x <= 20)

    4 - Dentro da estrutura while colocar um if com a condição (x % 2 !== 0)

    5 - Criar uma variável que servirá para criar um novo elemento, no caso, um parágrafo

    6 - Colocar o texto interno dessa variável para exibir o valor de x

    7 - Fora da estrutura if, colocar um appendChild da variável do parágrafo com a variável dos resultados
    
   8 - Fora da estrutura if, dentro do while no final colocar x++

*/

var x = 1
var result = document.getElementById('output')

while (x <= 20){
    
    if(x % 2 !== 0){
        var parag = document.createElement('p')
        parag.textContent = x
    }
    result.appendChild(parag)
    x++
}