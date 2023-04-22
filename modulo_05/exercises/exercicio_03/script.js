// Crie um programa que solicita ao usuário que insira um número e, em seguida, 
// imprima na tela todos os números primos entre 0 e o número inserido utilizando um loop for.

// Variáveis
input_numero = document.querySelector('input#numero')
div_resultado = document.querySelector('div#resultado')
button_resultado = document.querySelector('button#resultado')
//

// Programa em si
button_resultado.addEventListener('click', function () {
    div_resultado.innerHTML = ""
    let numero = Number(input_numero.value)
    let quantidade_divisores, isPrime
  
    for (let contador = 2; contador <= numero; contador++) {
        isPrime = true;
        quantidade_divisores = 0;
    
        for (let divisor = 2; divisor < contador; divisor++) {
            if (contador % divisor === 0) {
            quantidade_divisores++;
            isPrime = false;
            break;
            }
        }
        if (isPrime) {
            div_resultado.innerHTML += contador + ", ";
        }
    }
})
//
