/*
    Objetivo: Fazer um fatorial em uma funcao

    5! = 5* 4 * 3 * 2 * 1 = resultado tem que ser 120
    ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

    1 - Criar uma função fac com o parâmetro n
    2- Criar uma chamada para essa função com o número que será usado como parâmetro em uma variável "res"
    3- Preciso de uma variável que seja igual a 1 (var x = 1)
    4 - Criar um loop while ou for, preferi while e colocar como parâmetro n > 1 executar a ação de pegar a variável que começa no 1, multiplicar ela mesmo pelo n e armazenar esse calculo nela. Ou seja x*= n e depois reduzir 1 no número de n
    5 - Criar um return fora do while, retornando a variável que foi armazenada a conta
 */

    function fac(n){
        
        var x = 1

        while(n > 1){

            var conta = x *= n // x = x * n

            // x = 1(x) * 5(n) = 5, 5(x)*4(n) = 20, 20(x)*3(n) = 60, 60(x)*2(n) = 120, 120(x) * 1(n) = 120

            n--
        }
        return conta
    }

    var res = fac(5)
    console.log(res)