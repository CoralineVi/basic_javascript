// Crie um botão com um id "botao" e um parágrafo com um id "paragrafo". 
// Ao clicar no botão, o texto do parágrafo deve ser alterado para "O botão foi clicado!".

// Objetos do HTML
let obj_botao = window.document.querySelector("div#botao")
let obj_paragrafo = window.document.querySelector("p#paragrafo")
//

// Listeners
obj_botao.addEventListener('mousedown', botao_apertar)
obj_botao.addEventListener('mouseup', botao_soltar)
//

// Funções
function botao_apertar(){
    obj_paragrafo.innerHTML = "Apertando :D"
    obj_botao.style.background = "green"
}
function botao_soltar(){
    obj_paragrafo.innerHTML = "SOLTOU D:<"
    obj_botao.style.background = "red"
}
//
