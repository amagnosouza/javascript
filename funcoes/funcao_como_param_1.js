function executar(parametro) {
    if (typeof parametro === "function") {
        console.log(parametro()) // --> essa é a parte central do conteudo
    }
}

function bomDia() {
    return "Bom dia"
}

executar(3)
executar(bomDia)

const x = bomDia
const y = bomDia() // --> essa é a parte central do conteudo

//chamada da funcao x
console.log(x())
//y recebe o valor da funcao bomDia
console.log(y)
