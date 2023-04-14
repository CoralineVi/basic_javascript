// Recrie o teste 009 em um HTML.

// Objetos do HTML
let obj_regionalidade = document.querySelector("input#regionalidade")
let obj_verificar = document.querySelector("input#verificar")
let obj_resultado = document.querySelector("p#resultado")
//

// Listeners
obj_verificar.addEventListener("click", function() {
    if (obj_regionalidade.value === "brasileiro") {
        obj_resultado.innerHTML = "Você é <strong>brasileiro</strong> :D"
    } else if (obj_regionalidade.value === "") {
        obj_resultado.innerHTML = "Verifique a caixa de regionalidade e tente novamente"
    } else {
        obj_resultado.innerHTML = "Você é estrangeiro :D"
    }
})
//
