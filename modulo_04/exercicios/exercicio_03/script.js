// Crie um programa que solicite ao usuário que insira uma data (dia, mês e ano) e, com base nessa data, 
// exiba uma mensagem na tela indicando se essa data é válida ou não. 
// Utilize condicionais para verificar se a data inserida pelo usuário é válida 
// (por exemplo, se o dia está dentro do intervalo correto para o mês e ano inseridos) e exiba a mensagem correspondente.

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
