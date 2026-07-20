var velocidade = 61
console.log(`A velocidade do seu carro é ${velocidade}Km/h`)

if (velocidade > 60) {
    var multa = (velocidade - 60) * 4 
    if (multa < 50) {
        multa = 50
    }
    console.log(`Você ultrapassou a velocidade permitida. MULTADO! O valor da multa é de R$${multa}`)
}

console.log(`Dirija sempre usando cinto de segurança!`)

