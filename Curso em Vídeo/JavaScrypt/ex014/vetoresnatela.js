var vetor = [3,5,2,12,9]

for(var pos = 0; pos < vetor.length; pos++){
    console.log(`Esse array tem esses valores: ${vetor[pos]} | Feito em 'for'`)
}

//  ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---   ---

var position = 0;

while(position < vetor.length){
    console.log(`Esse array tem esses valores: ${vetor[position]} | Feito em 'while'`)
    position++
}

/*
Esse código é o mesmo que:

console.log(pos[0])
console.log(pos[1])
console.log(pos[2])
console.log(pos[3])
console.log(pos[4])
*/

//Agora vamos fazer uma versão mais simplificada e reduzida do for para o mesmo código

for(var lugar in vetor){ //Para cada lugar em vetor, escreva:
    console.log(`Esse array tem esses valores: ${vetor[lugar]} | Feito em 'for in'`)
} // Só funciona em objetos e arrays