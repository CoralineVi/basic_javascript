// CÓDIGO COPIADO DE OUTRO PROGRAMADOR, IREI ANALISAR ESSE CÓDIGO OUTRO DIA E TENTAR REPLICAR O FEITO DO MEU JEITO.

const inputNumber = document.getElementById('input-number')
const addButton = document.getElementById('add-button')
const numberList = document.getElementById('number-list')

addButton.addEventListener('click', function() {
    const number = parseInt(inputNumber.value)

    if (isNaN(number) || number < 1 || number > 100) {
        window.alert('Digite um número de 1 a 100')
        return
    }

    const existingNumbers = Array.from(numberList.getElementsByTagName('li')).map(li => parseInt(li.innerText))
    if (existingNumbers.includes(number)) {
        window.alert('Este número já está na lista')
        return
    }

    const listItem = document.createElement('li')
    listItem.innerText = number
    numberList.appendChild(listItem)

    const sortedNumbers = Array.from(numberList.getElementsByTagName('li')).map(li => parseInt(li.innerText)).sort((a, b) => a - b);
    numberList.innerHTML = ''
    sortedNumbers.forEach(num => {
        const listItem = document.createElement('li')
        listItem.innerText = num
        numberList.appendChild(listItem)
    })

    inputNumber.value = ''
})
