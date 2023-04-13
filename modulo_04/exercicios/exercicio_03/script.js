// Crie uma lista com 5 itens e faça com que, 
// ao clicar em cada item da lista, o texto do item seja exibido em um alerta.

// Objetos do HTML
let obj_botao1 = document.querySelector("p#botao1")
let obj_botao2 = document.querySelector("p#botao2")
let obj_botao3 = document.querySelector("p#botao3")
let obj_botao4 = document.querySelector("p#botao4")
let obj_botao5 = document.querySelector("p#botao5")
//

// Listeners
obj_botao1.addEventListener("click", botao_press)
obj_botao2.addEventListener("click", botao_press)
obj_botao3.addEventListener("click", botao_press)
obj_botao4.addEventListener("click", botao_press)
obj_botao5.addEventListener("click", botao_press)

// Função
function botao_press(evento){
    window.alert(evento.target.innerHTML)
}
