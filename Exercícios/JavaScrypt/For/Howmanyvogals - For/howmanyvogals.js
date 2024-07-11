/*
    Objetivo:

    -Contar quantas vogais tem em uma string específica: " Otorrinolaringologista" o resultado tem que ser: 10

    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

    1 - Primeiro, precisamos relacionar uma variável por onde irá sair os resultados na tela.

    2 - Precisamos criar uma variável (word) que vai ser a nossa palavra escolhida para ser contada

    3 - crio uma função Vogals com o parâmetro (word) que é a minha palavra a ser verificada

    4 - Criar uma constante com todas as vogais, maiúsculas e minúsculas a serem analisadas

    5 - Criar uma variável onde será adicionada a contagem (count)
    (Que é a nossa resposta final)

    6 - Dentro da function eu coloco um loop 'for' com a seguinte ideia: Crio uma variável contador(counter) que começará com o valor de 0, a condição será até o valor do contador ser menor ou = ao cumprimento total da minha palavra (word.length), adicionar 1 ao contador a cada loop rodado (++)

    7 - Dentro do 'for' eu preciso ter uma condição que o contador irá representar o índice da palavra a ser analisada e verificar a cada posição se ela está na constante vogais, se estiver, adicionar a contagem(count) 1

    8 - No final da function retornar(return) a variável count

    9 - Relacionar esse parágrafo com 
*/

function contarVogais(str) {
    // Defina as vogais
    const vogais = 'aeiouAEIOU';
    let contagem = 0;

    // Percorra cada caractere da string
    for (let i = 0; i < str.length; i++) {
        // Verifique se o caractere atual é uma vogal
        if (vogais.indexOf(str[i]) !== -1) {
            contagem++;
        }
    }

    return contagem;

}
    var results = document.getElementById('output')
    const word = "otorrinolaringologista"
    const howmanyvogals = contarVogais(word);
    var parag = document.createElement('p')
    parag.textContent = `A palavra ${word} tem ${howmanyvogals} vogais!`
    results.appendChild(parag)

    
    /*

1. Definição da Função

   - Define uma função chamada `contarVogais` que aceita uma string como argumento.


   
2. Definição das Vogais

   - Define uma constante `vogais` contendo todas as vogais em minúsculas e maiúsculas.



3. Inicialização da Contagem

   - Inicializa uma variável `contagem` com o valor 0 para contar as vogais.



4. Loop para Percorrer a String

   - Inicia um loop `for` para percorrer cada caractere da string `str`.



5. Verificação se o Caractere Atual é uma Vogal

   - Verifica se o caractere atual (`str[i]`) é uma vogal.
   - Incrementa `contagem` se for uma vogal.



6. Retorno da Contagem de Vogais

   - Retorna o valor de `contagem`, que é o número total de vogais na string `str`.



### Utilização da Função e Atualização do DOM



1. Obtenção do Elemento do DOM

   - Obtém o elemento com o ID `output` do DOM e o armazena na variável `results`.



2. Definição da Palavra

   - Define uma constante `word` com o valor `"otorrinolaringologista"`.



3. Contagem das Vogais na Palavra

   - Chama a função `contarVogais` com a palavra `word` e armazena o resultado em `howmanyvogals`.



4. Criação de um Parágrafo

   - Cria um novo elemento `<p>` (parágrafo) e o armazena na variável `parag`.



5. Definição do Conteúdo do Parágrafo

   - Define o texto do parágrafo para exibir a palavra e o número de vogais nela contidas.



6. Adição do Parágrafo ao DOM

   - Adiciona o parágrafo criado ao elemento `results` no DOM, exibindo o texto na página web. 
   
   
   */