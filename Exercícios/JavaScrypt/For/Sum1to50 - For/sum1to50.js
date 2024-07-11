/*
    Objetivo:

    -Somar os números de 1 a 50, o resultado tem que ser 1275

    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

    1 - Relacionar uma variável com a div que sairá o resultado

    2 - criar uma outra variável para adicionar os valores a ela

    3 - Criar um loop for com uma variável que começa com o valor 1, com a condição de ser menor ou igual a 50, criar uma nova variável recebendo o novo valor e somando ao valor passado

    4 - [opcional] - Criar uma variável de soma(sum) para relacionar a operação a ela

    5 - Criar uma operação na seguinte lógica: 
        Primeiro: precisamos ter um número vazio para adicionar os valores a ele(Secnum)
        Segundo: Já que o num começa com 1, na primeira rodada do loop, secnum precisa estar vazio para receber apenas 1, logo, passará a ter valor 1
        Terceiro: No próximo loop, num aumentará 1, logo, terá o valor de 2 mas secnum continua 1 porquê não teve nenhuma adição como o num(num++). Então será o novo valor de num(2) + o valor de secnum(1);
        Quarto: O ciclo se repete, ou seja, próximo valor, num = 3 + secnum = 3(1 do valor dele + o novo valor de num) e assim consecutivamente até ser igual a 50 o valor de num.
*/

var results = document.getElementById('output')
var secnum = 0

for(let num = 1;num <= 50; num++){
    const sum = secnum += num
    const parag = document.createElement('p')
    parag.textContent = sum
    results.appendChild(parag)
}

