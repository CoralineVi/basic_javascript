// Crie uma função chamada "calcularIMC" que recebe dois parâmetros:
// peso e altura. A função deve calcular o índice de massa corporal (IMC) da pessoa e retornar o resultado. 
// Em seguida, crie dois campos de input com ids "peso" e "altura" e um botão com um id "calcular". 
// Ao clicar no botão, exiba o resultado do IMC em um alerta, usando a função "calcularIMC".

function calcularIMC(peso, altura){
    let IMC = peso / (altura**2)
    window.alert(`esse aqui é o ${IMC}`)
}
