let nota = 0
//arredonda para cima => 7.4 == 8.0
switch (Math.ceil(nota)) {
    case 10:
    case 9:
    case 8:
    case 7:
        console.log("Parabens")
        break // forca a saida do switch
    case 6:
    case 5:
        console.log("Recuperacao")
        break
    case 4:
    case 3:
    case 2:
        console.log("Reprovado")
        break
    case 1:
    case 0:
        console.log("Voltou 1 ano")
        break
    default:
        console.log("Digite uma nota de 0 a 10")
}

console.log("Fim...")