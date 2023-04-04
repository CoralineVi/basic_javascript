// Crie uma variável que armazene um número inteiro e verifique se ele é positivo, negativo ou zero. 
// Exiba uma mensagem no console informando o resultado.

// armazena o número inteiro
let numero = Number.parseInt(window.prompt("Digite um número inteiro"))

// calcula se o valor é positivo, negativo ou zero
let positivo = numero > 0
let zero = numero == 0
let negativo = numero < 0

// exibe a mensagem correspondente à nota
window.alert(positivo ? `O número ${numero} é positivo` :
            zero ? `O número é 0` :
            negativo ? `O número ${numero} é negativo` : 
            "erro");
