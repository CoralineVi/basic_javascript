// Crie um site que faça uma contagem numerica utilizando a estrutura for

// Programa em si
function contador() {
    // Espaços para input
    let input_inicio = document.querySelector('input#inicio')
    let input_fim = document.querySelector('input#fim')
    let input_passo = document.querySelector('input#passo')

    // Local onde ficara os resultados
    let p_numeros = document.querySelector('p#numeros')

    // Valores númericos
    let inicio = Number(input_inicio.value)
    let fim = Number(input_fim.value)
    let passo = Number(input_passo.value)
    
    // Contagem
    p_numeros.textContent = ""

    if (inicio < fim && passo > 0) {
        for (inicio; inicio <= fim; inicio += passo) {
            p_numeros.textContent += (inicio + " ")
        }
        p_numeros.textContent += "FIM"
    } 

    else if (inicio > fim && passo > 0) {
        for (inicio; inicio >= fim; inicio -= passo) {
            p_numeros.textContent += (inicio + " ")
        }
        p_numeros.textContent += "FIM"
    }

    else {
        p_numeros.textContent = "Impossível contar"
    }
}
//

// Listeners
let button_contar = document.querySelector('button#contar')
button_contar.addEventListener('click', contador)
//
