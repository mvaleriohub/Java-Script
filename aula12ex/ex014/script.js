function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let backcolor = ''
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora < 6) {
        msg.innerHTML += `Boa Madrugada`
        img.src = 'imagens/noite.jpg'
        backcolor = '#1f1c1b'

    } else if (hora >= 6 && hora < 13) {
        msg.innerHTML += `Bom dia`
        img.src = 'imagens/manha.jpg'
        backcolor = '#c5d6e5'

    } else if (hora >= 13 && hora < 18) {
        msg.innerHTML += `Boa tarde`
        img.src = 'imagens/tarde.jpg'
        backcolor = '#c48c67'

    } else {
        msg.innerHTML += `Boa Noite`
        img.src = 'imagens/noite.jpg'
        backcolor = '#1f1c1b'
    }
    document.body.style.background = backcolor
}

