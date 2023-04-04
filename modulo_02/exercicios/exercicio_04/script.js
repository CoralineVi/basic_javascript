// Crie uma variável que armazene a idade de uma pessoa. Verifique se a idade é maior ou igual a 18 anos 
// e exiba uma mensagem informando se a pessoa é maior de idade ou não.

let idade = Number(window.prompt("Digite sua idade"))
let maior_idade = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"

window.alert(maior_idade)
