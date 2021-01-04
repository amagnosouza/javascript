// Definior o conceito de acordo com a faixa de nota correspondente
/*

A => 9.0 e 10.0
B => 7.0 e 8.9
C => 5.0 e 6.9
D => 4.5 e 4.9
F => Abaixo de 4.5

*/

const nota = 8.7

if (nota < 4.5 && nota >= 0) {
    console.log("F")
    } if (nota >= 4.5 && nota <= 4.9) {
        console.log("D")
        } if (nota >= 5.0 && nota <= 6.9) {
            console.log("C")
            } if (nota >= 7 && nota <= 8.9) {
                console.log("B")
                } if (nota >= 9) {
                    console.log("A")
                    }