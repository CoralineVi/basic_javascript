// Crie uma variável que armazene uma nota de 0 a 10 e exiba uma mensagem no console informando se a nota é:
// insuficiente (menor que 6), suficiente (entre 6 e 7), boa (entre 8 e 9) ou excelente (maior que 9).

// Armazena nota
let nota = window.prompt("Digite uma nota entre 0 e 10")

// Definindo variáveis de qualidade das notas
let abaixo_de_0 = nota < 0

let insuficiente = nota < 6
let suficiente = nota == 6 || nota == 7
let boa = nota > 7 && nota < 9
let excelente = nota > 8 && nota <= 10

// Mostrando qual o nível de qualidade da nota
window.alert(
    abaixo_de_0 ? "Insira uma nota válida": /* caso a nota seja menor que 0*/
    
    insuficiente ? `nota ${nota}: Reprovado`:
    suficiente ? `nota ${nota}: Aprovado por pouco`:
    boa ? `nota ${nota}: é uma boa nota`:
    excelente ? `nota ${nota}: é uma nota excelente` :

    "Insira uma nota válida" /* caso a nota seja maior que 10*/
)
