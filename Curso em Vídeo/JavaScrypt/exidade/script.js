function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]Verifique seus dados e tente novamente!')
    } else{
        fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 1 && idade <= 13){
                //criança
                img.setAttribute('src','imagens/foto-m-kid.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','imagens/foto-m-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','imagens/foto-m-adulto.png')
            }else if (idade <= 120){
                //idoso
                img.setAttribute('src','imagens/foto-m-velho.png')
            } else{
                //idade inválida
                alert('[ERRO] Idade Inválida, tente novamente!')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 1 && idade <= 13){
                //criança
                img.setAttribute('src','imagens/foto-f-kid.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','imagens/foto-f-jovem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','imagens/foto-f-adulto.png')
            }else if (idade <= 120){
                //idoso
                img.setAttribute('src','imagens/foto-f-velho.png')
            } else{
                //idade inválida
                alert('[ERRO] Idade Inválida, tente novamente!')
            }
        }
        res.innerHTML = `Gênero: ${genero} idade: ${idade}`
        res.appendChild(img)
    }
}
