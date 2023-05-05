let numeros = [2, 4, 1, 5, 3]

console.log(`Os números são ${numeros.sort()}`)

numeros.push(1)
console.log(`Os números são ${numeros}`)

console.log(`O último número da array é: ${numeros[numeros.length -1]}`)

console.log(`O tamanho da array é: ${numeros.length}`)

console.log(`For para a quantidade de elementos do array`)
for (var i = 0;numeros.length > i;i++) {
    console.log(numeros[i])
}

console.log(`For lendo todos elementos da array`)
for (var i of numeros) {
    console.log(i)
}
