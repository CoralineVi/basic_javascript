// Crie uma variável que armazene um número inteiro e outra variável que armazene uma string contendo um número. 
// Converta a string em número e some com o primeiro número inteiro. Exiba o resultado.

let numero_int = Number.parseInt(window.prompt("Digite um número"))
let numero_str = String(window.prompt("Digite outro número"))
let soma = numero_int + Number(numero_str)

window.alert(`${numero_int} + ${numero_str} = ${soma}`)
