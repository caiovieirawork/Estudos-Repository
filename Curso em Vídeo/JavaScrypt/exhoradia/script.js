function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = 20
    //var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/Dia.png'
        document.body.style.background = '#f9bc58'
        
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/Tarde.png'
        document.body.style.background = '#e1741a'
    } else{
        img.src = 'imagens/Noite.png'
        document.body.style.background = '#9374ad'
    }
}