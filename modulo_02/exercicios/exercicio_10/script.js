// Escreva um programa que leia dois números e imprima a soma, a subtração, 
// a multiplicação, a divisão e o resto da divisão do primeiro pelo segundo.

// Guarda os valores
let numero1 = Number(window.prompt("Digite um número"))
let numero2 = Number(window.prompt("Digite outro número"))

// Os calculos em si
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let resto = numero1 % numero2

// Mostra os valores
window.alert(`Soma: ${soma}`);
window.alert(`Subtração: ${subtracao}`);
window.alert(`Multiplicação: ${multiplicacao}`);
window.alert(`Divisão: ${divisao}`);
window.alert(`Resto da divisão: ${resto}`);
