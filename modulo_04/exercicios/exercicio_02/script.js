// Faça um site que com base no horário do dia
// mude uma imagem e a cor de fundo do site

// Objetos do HTML
let img_horario = document.querySelector("img#img_horario")
let txt_horario = document.querySelector("sub#txt_horario")
let parte_dia = document.querySelector("h1#parte_dia")
let body = document.querySelector("body")
//


// Funções
function atualizar() {
    let hora = new Date().getHours()
    let minutos = new Date().getMinutes()

    // Formatando mensagem
    if (minutos < 10) {
        minutos = "0" + minutos
    }
    if (hora < 10) {
        hora = "0" + hora
    }
    txt_horario.innerHTML = `Agora são ${hora}:${minutos}`
    //

    // Horários
    if (hora >= 6 && hora < 12) { // Manhã
        img_horario.src = "images/manha.jpg"
        img_horario.alt = "Manhã"
        parte_dia.textContent = "Bom dia"
        body.style.background = "#ff764f"
    } 
    
    else if (hora >= 12 && hora < 18) { // Tarde
        img_horario.src = "images/tarde.jpg"
        img_horario.alt = "Tarde"
        parte_dia.textContent = "Boa tarde"
        body.style.background = "#3e72d7"
    } 
    
    else { // Noite ou madrugada
        img_horario.src = "images/noite.jpg"
        img_horario.alt = "Noite"
        parte_dia.textContent = "Boa noite"
        body.style.background = "#022046"
    }
    //
    
}
//


// Atualizando horário
atualizar()
setInterval(atualizar, 10000)
//
