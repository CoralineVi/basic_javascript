// Crie uma variável que armazene a temperatura em graus Celsius e converta para Fahrenheit. 
// Exiba o resultado.

let temperatura_C = Number(window.prompt("Digite uma temperatura em Celsius"))
let temperatura_F = (temperatura_C * 1.8) + 32

window.alert(`A temperatura que você de foi ${temperatura_C}°C
Em Fahrenheit fica ${temperatura_F}°F`)
