// recebe parametros e retorna algo
function somar(a, b) {
    return a + b
}
console.log(`O resultado é: ${somar(40, 40)}`)

// funcao com parametro e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b)
}
exibirMultiplicacao(50, 2)
exibirMultiplicacao(2, 2)

// funcao SEM parametro e COM retorno
function retornaDataAtual() {
    return new Date()
}
console.log(retornaDataAtual())

// funcao SEM parametro e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours())
}
exibirHoraAtual()