function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('iano')
    let resultado = document.getElementById('resultado')

    if (fAno.value.length == 0 || fAno.value > ano || fAno.value < 1900) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let sex = document.getElementsByName('sex')
        let img = document.getElementById('img')
        let idade = ano - Number(fAno.value)
        let genero

        if (sex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 6) {
                img.src = 'imagens/bebe-hm.png'
            } else if (idade < 16) {
                img.src = 'imagens/crianca-hm.png'
            } else if (idade < 21) {
                img.src = 'imagens/jovem-hm.png'
            } else if (idade < 60) {
                img.src = 'imagens/adulto-hm.png'    
            } else {
                img.src = 'imagens/idoso-hm.png'
            }
        } else {
            genero = 'mulher'

            if (idade >= 0 && idade < 6) {
                img.src = 'imagens/bebe-ml.png'
            } else if (idade < 16) {
                img.src = 'imagens/crianca-ml.png'
            } else if (idade < 21) {
                img.src = 'imagens/jovem-ml.png'
            } else if (idade < 60) {
                img.src = 'imagens/adulto-ml.png'    
            } else {
                img.src = 'imagens/idoso-ml.png'
            }
        }

        resultado.innerHTML = ''
        let texto = document.createElement('p')
        texto.textContent = `Detectamos ${genero.toLowerCase()} com ${idade} anos.`
        resultado.appendChild(texto)
        resultado.appendChild(img)
        resultado.style.textAlign = 'center'
    }
}