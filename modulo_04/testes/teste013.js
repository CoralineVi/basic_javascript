let dia_semana = new Date().getDay()
let hoje = null

switch (dia_semana) {
    case 0:
        hoje = "Domingo"
        break
    case 1:
        hoje = "Segunda-feira"
        break
    case 2:
        hoje = "Terça-feira"
        break
    case 3:
        hoje = "Quarta-feira"
        break
    case 4:
        hoje = "Quinta-feira"
        break
    case 5:
        hoje = "Sexta-feira"
        break
    case 6:
        hoje = "Sábado"
        break
    default:
        hoje = "Dia da semana inválido"
}

console.log(`Hoje é ${hoje}`)
