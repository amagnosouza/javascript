let temDinheiro = true
let temSol = true
let carroNaGaragem = false

let resultadoE = "#1 (AND) Vai para o shopping? "
resultadoE += temDinheiro && temSol

console.log(resultadoE)

let resultadoOU = "#2 (OR) - Vai para o Shopping? "
resultadoOU += temSol || carroNaGaragem

console.log(resultadoOU)

console.log(true != false)

console.log("Não verdadeiro "+ !true)
console.log("Não falso "+ !false)