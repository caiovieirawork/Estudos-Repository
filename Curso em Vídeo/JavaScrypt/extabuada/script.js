function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById ('seltab')

    if ( num.value.length == 0){
        window.alert('[ERRO] Número inválido')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
