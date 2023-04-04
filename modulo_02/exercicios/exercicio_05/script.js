// Crie uma variável que armazene um número inteiro e verifique se ele é par ou ímpar. 
// Exiba uma mensagem informando se o número é par ou ímpar.

let numero = Number.parseInt(window.prompt("Digite um número inteiro"))
let par_impar = numero % 2 == 0 ? "O seu número é par" : "O seu número é ímpar"

window.alert(par_impar)
