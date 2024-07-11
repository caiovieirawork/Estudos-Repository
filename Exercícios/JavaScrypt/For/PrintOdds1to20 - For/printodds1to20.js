/*
    1 - Temos que relacionar uma variável com a div onde será exibida os resultados

    2 - Criar uma estrutura de loop 'for', criando o valor inicial de uma variável como 1, a condição de ser até 20

    3 - Criar uma nova condição, que é somente printar se(if) for divisivel por 2 (% 2)resultando estritamente não igual (!==) a 0 

    3 - Criar um elemento parágrafo.

    4 - Adicionar ao texto do parágrafo a variável com o valor do 'for']

    5 - Colocar o parágrafo dentro do div
*/

var results = document.getElementById('output')

for(let numodd= 1;numodd <= 20; numodd++){
    if(numodd % 2 !==0){
        var parag = document.createElement('p')
        parag.textContent = numodd
        results.appendChild(parag)
    }
}