var array = [3,12,5,2,9]

var pos = array.indexOf(13)

/*
    O indexOf() pode localizar um valor na posição de um array e ele vai retornar o valor da posição, exemplo: 

    [ 3 , 5 , 7 , 8 ]  < -  Os valores e suas respectivas posições
      0   1   2   3

      Então se eu colocar indexOf(7), ele irá me retornar o valor da posição que esse valor está, no caso o 2

      Mas se o valor que eu procurar não existir, exemplo:

      indexOf(2)   -  Ele retornará -1
*/

if(pos == -1){
    console.log(`O valor que você colocou não existe no array :(`)
} else{
    console.log(`O valor que você colocou está na posição: ${pos} do array`)
}