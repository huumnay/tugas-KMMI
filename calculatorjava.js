const number = document.querySelectorAll('.number')


const calculatorscreen = document.querySelectorAll('.calculator-screen')

const updateScreen = (number) => {
    calculatorscreen.value = number
}


let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
number.forEach((number) => {
    number.addEventListener('click', () => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})



const operator = document.querySelectorAll('.operator')

operator.forEach((operator) => {
    operator.addEventListener('click', () => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}


const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})


const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})
const clearAll = () => {
    prevNumber = ''
    calcuationOperator = ''
    currentNumber = '0'
}



const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', () => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}