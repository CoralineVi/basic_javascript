// Crie um site que faça a tabuada usando a estrutura for

// Variáveis importantes
input_numero = document.querySelector("input#numero")
button_contar = document.querySelector("button#resultado")
div_tabuada = document.querySelector("div#tabuada")
//

// Gerando tabuada
button_contar.addEventListener("click", function () {
    let numero = Number(input_numero.value) // Valor inserido
    div_tabuada.innerHTML = ""
    for (let i = 1; i <= 10; i++) {
        div_tabuada.innerHTML += `<li>${numero} x ${i} = ${numero * i}</li> <br>`
    }
})
//
