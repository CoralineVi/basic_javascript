// Crie um programa que solicita ao usuário que insira um número e, em seguida, 
// imprima na tela todos os números primos entre 0 e o número inserido utilizando um loop for.

// Programa em si
input_numero = document.querySelector('input#numero')
div_resultado = document.querySelector('div#resultado')
button_resultado = document.querySelector('button#resultado')
//

// Listeners
button_resultado.addEventListener('click', function () {
    let numero = Number(input_numero.value)
    
    quantidade_divisores = 0
    for (let contador = 1; contador <= numero; contador++) {

        if (quantidade_divisores > 2) {
            div_resultado.innerHTML += contador
        }

        for (let divisor = 1; divisor <= numero; divisor++) {
            if (contador / divisor === 1)
            quantidade_divisores++
        }
    }
})
//
