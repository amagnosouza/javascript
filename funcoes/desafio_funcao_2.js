// criar uma funcao que recebe um parametro e retorna o conceito
function retornaConceito(nota) {
    switch(Math.floor(nota)){
        // como possui o return, não é necessario a utilização do break
        case 10: return "A+";
        case 9: return "A";
        case 8: return "B+";
        case 7: return "B";
        case 6: return "C+";
        case 5: return "C";
        case 4: return "D+";
        case 3: return "D";
        case 2: return "E+";
        case 1: return "E";
        case 0: return "F";
        default: return null;
    }
}
console.log(`O conceito do Alexandre é: ${retornaConceito(5.5)}`)
console.log(`O conceito do Joao é: ${retornaConceito(9.8)}`)
console.log(`O conceito do Maria é: ${retornaConceito(7.2)}`)
