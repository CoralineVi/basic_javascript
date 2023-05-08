// Objetos
let input_numero = document.querySelector("#input_numero");
let button_adicionar = document.querySelector("#button_adicionar");
let div_list = document.querySelector("#list");

let lista_numeros = [];
//

// Funções
function adicionar_numero(numero) {
    if (numero >= 1 && numero <= 100) {
        if (!lista_numeros.includes(numero)) { // Verifica se o número já existe na lista
            lista_numeros.push(numero);
            lista_numeros.sort();

            div_list.innerHTML = "";
            for (let num = 0; num < lista_numeros.length; num++) {
                div_list.innerHTML += `<li>${lista_numeros[num]}</li>`;
            }
        } else {
            window.alert("Número já existe na lista!");
        }
    } else {
        window.alert("ERRO");
    }
}

button_adicionar.addEventListener("click", function() {
    adicionar_numero(Number(input_numero.value));
});
