// Crie um programa que solicite ao usuário que insira uma data (dia, mês e ano) e, com base nessa data, 
// exiba uma mensagem na tela indicando se essa data é válida ou não. 
// Utilize condicionais para verificar se a data inserida pelo usuário é válida
// (por exemplo, se o dia está dentro do intervalo correto para o mês e ano inseridos) e exiba a mensagem correspondente.

// Objetos do HTML
let input_dia = document.querySelector("input#dia")
let input_mes = document.querySelector("input#mes")
let input_ano = document.querySelector("input#ano")
let verificar = document.querySelector("input#verificar")
let resposta = document.querySelector("div#resposta")
//

// Verificador
verificar.addEventListener("click", function () {

    // Transformando valores em números
    let dia = +input_dia.value
    let mes = +input_mes.value
    let ano = +input_ano.value
    //

    // Validando a data
    let valido = verificador(dia, mes, ano)
    //

    // Resolução
    if (valido === true) {
        // Calculando idade
        let idade = calcular_idade(dia, mes, ano)
        //

        // Resposta + verificador de idade válida + pode votar?
        let votar = null
        if (idade <= 0) {
            resposta.innerHTML = "você tem 0 anos? sério?"
        } else {
            idade >= 16 ? votar = "você pode votar" : votar = "você não pode votar"
            resposta.innerHTML = `Data válida :D <br>e pelo que vejo você tem ${idade} anos de idade <br>então ${votar}`
        }
        //
    } else {
        window.alert("Data invalida :<")
    }
    //
})
//

// Funções

// Verificador de validez de datas
function verificador(dia, mes, ano) {
    
    // Variaveis que guardam a verificação
    let verificação_dia = null
    let verificação_mes = null
    let verificação_ano = null
    valido = null
    //

    // Testes com ternários
    dia <= 31 ? verificação_dia = true : verificação_dia = false
    mes <= 12 ? verificação_mes = true : verificação_mes = false
    ano <= 2023 ? verificação_ano = true : verificação_ano = false
    //

    // Verificando validez
    if (verificação_dia === true && verificação_mes === true && verificação_ano === true) {
        valido = true
    } 
    else {
        valido = false
    }
    //

    return valido
}

// Calculadora de idade
function calcular_idade(dia, mes, ano) {
    // Data de hoje
    let dia_hoje = new Date().getDate()
    let mes_hoje = new Date().getMonth() + 1
    let ano_hoje = new Date().getFullYear()
    //

    // Calculando idade
    let idade = Number()
    idade = ano_hoje - ano
    if (mes_hoje < mes || (mes_hoje === mes && dia_hoje <= dia)) {
        idade--
    }
    //

    return idade
}

//
