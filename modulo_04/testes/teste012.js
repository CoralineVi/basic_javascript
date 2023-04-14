let hora = new Date().getHours()

console.log(`Agora são ${hora} horas`)

if (hora > 00 && hora <= 05) {
    console.log(`Boa madrugada`)
} else if (hora >= 06 && hora <= 12) {
    console.log(`Bom dia`)
} else if (hora > 12 && hora < 18) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite`)
}
