// Crie uma função chamada "calcularIMC" que recebe dois parâmetros:
// peso e altura. A função deve calcular o índice de massa corporal (IMC) da pessoa e retornar o resultado. 
// Em seguida, crie dois campos de input com ids "peso" e "altura" e um botão com um id "calcular". 
// Ao clicar no botão, exiba o resultado do IMC em um alerta, usando a função "calcularIMC".

// Objetos do HTML
let obj_botao_resultado = document.querySelector("div#resultado")
let obj_peso = document.querySelector("input#peso")
let obj_altura = document.querySelector("input#altura")
//

// Listeners
obj_botao_resultado.addEventListener('click', calcularIMC)
//

// Funções
function calcularIMC(peso, altura){
    peso = Number(obj_peso.value)
    altura = Number(obj_altura.value)
    let IMC = peso / (altura**2)
    window.alert(`esse aqui é o ${IMC.toFixed(2)}`)
}
//
