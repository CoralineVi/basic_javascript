// Crie uma imagem com um id "imagem" e faça com que, ao clicar na imagem, ela seja trocada por outra imagem.

// Objetos do HTML
let obj_imagem = window.document.querySelector("p#imagem")
//

// Listeners
obj_imagem.addEventListener("click", mudar_imagem)
//

// Funções
function mudar_imagem(){
    obj_imagem.src = "shitpost2.jpg"
}
//
