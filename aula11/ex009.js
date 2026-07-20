var velocidade = 20
console.log(`A velocidade do seu carro é ${velocidade}Km/h`)

if (velocidade > 60) {
    if (velocidade > 100) {
        var multa = (velocidade - 60) * 8 
        console.log(`Você super ultrapassou a velocidade permitida. MULTADO! O valor da multa é de R$${multa}`)
    } else {
        var multa = (velocidade - 60) * 4
        if (multa < 50) {
        multa = 50
        }
        console.log(`Você ultrapassou a velocidade permitida. MULTADO! O valor da multa é de R$${multa}`)
    }
}
console.log(`Dirija sempre usando cinto de segurança!`)