/*
    Objetivo: Mostrar na tela os números de 1 até 20, um por um

    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

    1 - Criar uma variável x onde começará com o valor = 1
    2 - Criar uma variável para ser exibida os resultados, relacionada com a div com id 'output'
    3 - Criar uma estrutura while com o seguinte parâmetro = x <= 20
    4 - Dentro do while, colocar x++
    5 - Criar um let parag para criar um novo elemento ('p')
    6 - Colocar o valor de x no texto interno dessa variável parag
    7 - Colocar esse parag como filho da variável results
*/

var x = 1;
var results = document.getElementById('output')

while(x <= 20){
    let parag = document.createElement('p')
    parag.innerText = x
    results.appendChild(parag)
    x++
}