// Crie duas variáveis que armazenem números inteiros e verifique se o primeiro é maior que o segundo. 
// Exiba uma mensagem informando qual é o maior número.

let numero1 = Number.parseInt(window.prompt("Digite um número inteiro"))
let numero2 = Number.parseInt(window.prompt("Digite outro número inteiro"))
let maior_que = numero1 > numero2 ? `${numero1} > ${numero2}` : `${numero2} > ${numero1}`

window.alert(maior_que)
