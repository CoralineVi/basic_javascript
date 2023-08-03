// Obtém referências para os elementos HTML com base em seus IDs
const inputNumber = document.getElementById('input-number') // Caixa de texto para entrada do número
const addButton = document.getElementById('add-button') // Botão de adicionar
const numberList = document.getElementById('number-list') // Lista de números

// Adiciona um listener de evento ao botão de adicionar
addButton.addEventListener('click', function() {
    // Obtém o número digitado na caixa de texto e o converte para um número inteiro
    const number = parseInt(inputNumber.value)

    // Verifica se o número não é um valor válido (Verificação: não é um número, é menor que 1 ou maior que 100)
    if (isNaN(number) || number < 1 || number > 100) {
        window.alert('Digite um número de 1 a 100')
        return
    }

    // Obtém todos os números existentes na lista atualmente
    const existingNumbers = Array.from(numberList.getElementsByTagName('li')).map(li => parseInt(li.innerText)) // isso aqui é complicado de explicar

    // Verifica se o número já está na lista
    if (existingNumbers.includes(number)) {
        window.alert('Este número já está na lista')
        return
    }

    // Cria um novo item de lista e define o número como seu texto
    const listItem = document.createElement('li')
    listItem.innerText = number

    // Adiciona o novo item de lista à lista de números
    numberList.appendChild(listItem)

    // Obtém todos os números da lista, converte-os para um array e os classifica em ordem crescente
    const sortedNumbers = Array.from(numberList.getElementsByTagName('li')).map(li => parseInt(li.innerText)).sort((a, b) => a - b)

    // Remove todos os elementos filhos da lista
    while (numberList.firstChild) {
        numberList.removeChild(numberList.firstChild)
    }

    // Adiciona novamente os números classificados à lista
    sortedNumbers.forEach(num => {
        const listItem = document.createElement('li')
        listItem.innerText = num
        numberList.appendChild(listItem)
    });

    // Limpa o valor da caixa de texto de entrada
    inputNumber.value = '';
});
