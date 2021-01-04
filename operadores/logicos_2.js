const t1 = true
const t2 = true

console.log('Vamos comprar a TV de 50"? ' + (t1 && t2)) // AND
console.log('Vamos comprar a TV de 32"? ' + (t1 !== t2)) // XOR

let sorvete = t1 || t2
console.log('Vamos comprar sorvete? ', sorvete) // OR

console.log("Vai ficar em casa?", !(t1 || t2)) // NOT