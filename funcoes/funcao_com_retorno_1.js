function sempreRetorna8k() {
    return 8000
}

function textoOuNumero(retornaTexto) {
    // Com operador ternario
    return retornaTexto ? "Sou um texto!" : 123
    // if (retornaTexto) {
    //     return "Sou um texto"
    // } else {
    //     return 567
    // }
}

let valor = sempreRetorna8k()
console.log(valor)

let texto = textoOuNumero(true)
console.log(texto)

console.log(textoOuNumero(false))