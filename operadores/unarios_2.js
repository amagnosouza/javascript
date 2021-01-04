let a = 1
let b = 2

// console.log(++a === b++)
/*
A ordem de precedencia é ++a que passa a ter o valor 2
A segunda é o comparador === que no momento irá verificar 2 === 2 tendo o retorno - TRUE
por ultimo, o b será incrementado passado a ter o valor 3
sendo A e B diferentes como pode ser confirmado no ultimo codigo da linha 11
*/
//console.log(a === b)

// Outra forma melhor de escrever o código é:
a++
console.log(a === b)
b++
console.log ("O valor de A é:",a ,"e o valor de B é:", b)