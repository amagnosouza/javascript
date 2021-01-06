// Realizar uma "calculadora simples utilizando if e else"

const A = 10
const B = 28
const operacao = "1"// + - * / % 
let resultado

if (operacao == "+"){
    resultado = A + B
} else if (operacao == "-") {
    resultado = A - B
} else if (operacao == "*") {
    resultado = A * B
} else if (operacao == "/") {
    resultado = A / B
} else if (operacao == "%") {
    resultado = A % B
} else {
    resultado = "Operacao não identificada"
}


console.log(resultado)