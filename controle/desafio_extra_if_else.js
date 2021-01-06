// Definior o conceito de acordo com a faixa de nota correspondente
/*

A => 9.0 e 10.0
B => 7.0 e 8.9
C => 5.0 e 6.9
D => 4.5 e 4.9
F => Abaixo de 4.5

*/

const nota = 6

if(nota > 9){
    console.log("A")
}else if (nota >= 7.0 && nota <= 8.9) {
    console.log("B")
}else if (nota >= 5.0 && nota <= 6.9) {
    console.log("C")
}else if (nota >= 4.5 && nota <= 4.9) {
    console.log("D")
}else{
    console.log("F")
}