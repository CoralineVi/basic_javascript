let numero_par = 2
let numero_impar = 3

function parimpar(numero) {
    if (numero%2 == 0) {
        return ("Par")
    } else{
        return ("Ímpar")
    }
}

function somar(numero1, numero2) {
    return (numero1 + numero2)
}

function fatorial(numero) {
    fatorial_resultado = 1
    for (let c = numero; c > 1; c--) {
        fatorial_resultado *= c
    }
    return (fatorial_resultado)
}

soma_parimpar = somar(numero_impar, numero_par)

console.log(`O número ${numero_par} é ${parimpar(numero_par)}`)
console.log(`O número ${numero_impar} é ${parimpar(numero_impar)}`)
console.log(`${numero_par} + ${numero_impar} = ${soma_parimpar}`)
console.log(`${soma_parimpar}! = ${fatorial(soma_parimpar)}`)
