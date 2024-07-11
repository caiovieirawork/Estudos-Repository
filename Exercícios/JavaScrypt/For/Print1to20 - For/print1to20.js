/*
    Para criar esse código tenho que seguir o passo a passo:

    1 - Criar uma variável atribuindo a ela como representante da div que mostrará os resultados no HTML

    2 - Criar um loop usando 'for', com a ideia de: uma variável começa com 1, depois criar uma condição para testar se ele ainda está menor ou igual a 20, se essa condição for testada verdadeira, adicionar um para esse valor

    3 - Dentro do loop é preciso agora criar um parágrafo no HTML para ser adicionado os números.

    4 - Esse parágrafo ainda n foi relacionado com o valor, ent o conteúdo do texto dele, precisa receber o valor da variável que usamos para testar o 'for'

    5 - Esse parágrafo ainda não foi alocado para o local certo, ou seja, dentro da div, então precisamos fazer isso também

    --conclusão--

    Sempre quando o loop for feito, ele criará um novo parágrafo e adicionará o número atual até a condição finalizar.
*/




var results = window.document.getElementById('output')

for (let num = 1; num <= 20 ; num++){
    const parag = document.createElement('p')
    parag.textContent = num
    results.appendChild(parag)
}

/*
        var results = window.document.getElementByID('output')

    - Criando uma variável de resultados e escolhendo o elemento no html para ela ser relacionada, no caso, a div com o id 'output'



        for (let num = 1; num <= 20 ; num ++){
        }

    -Criando uma estrutura de loop for, que é estruturado assim:



    for(introdução[de uma variável por exemplo]; condição[que será olhada como falso ou verdadeiro]; complemento[O que irá acontecer])

        let num = 1

    - Declara uma variável (let) com o nome 'num' recebendo 1 como seu valor

        num <= 20

    -Enquanto a variável 'num' for menor ou igual a 20 esta condição continuará fazendo o loop acontecer.

        num ++

    -Significa que essa variável recebe ela mesma (o próprio valor) + 1, ou seja, simplesmente um incremento de 1 a cada vez que a condição for verdadeira.


    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---



        const parag = document.createElement('p')

    -Criando uma variável const(constante) de nome 'parag' que recebe uma função que cria um novo elemento no HTML, no caso, cria a tag <p> parágrafo.

        parag.textContent = num

    -O conteúdo de texto que está dentro da variável 'parag' anteriormente criada recebe o valor da variável 'num'.

        results.appendChild(parag)

    -Faz com que a variável feita para criar uma tag <p> no HTML, seja adicionada como filha da variável 'results', que foi usada para se relacionar com a div onde seria exibida os resultados. 
    Explicando um pouco melhor, para ser filho em um html vc precisa fazer parte da tag selecionada, no HTML é simples

    <div id="output"> //tag pai
     <p> //tag filha
    </div>

    Mas não já criamos o parágrafo? Sim, mas é como se ele simplesmente tivesse sido criado sem posição específica. Então o .appendChild() serve para adicionar como filho a uma tag antes selecionada.

    O que fizemos foi: 

    <div id="output"> 

    </div>      | isso foi relacionado com: results.document.getElementById('output')

    <p>         | isso foi criado com: const parag = document.createElement(p)

    ---   ---   ---   ---   ---  Depois do .appendChild  ---   ---   ---   ---   ---

    <div id="output"> 

     <p>        | tag foi realocada para um lugar específico.

    </div>
*/