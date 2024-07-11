function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível Contar!'
        alert('[ERRO] Faltam Dados!')
    } else{
        res.innerHTML = 'Contando:' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert('[ERRO] Passo Inválido! - Considerando Passo = 1')
            p = 1;
        }

        if(i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}\u{1F60E} `
            }
            res.innerHTML += ` \u{1F90C} `
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}\u{1F60E} `
            }
            res.innerHTML += ` \u{1F90C} `
        }
        }
        
    }
