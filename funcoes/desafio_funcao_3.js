// aluno aprovado <=7 recuperacao 4 e <7 e <4 reprovado mostrar status
const nota1 = 2.2
const nota2 = 5.1
const nota3 = 10.0

// Descobrir a menor nota
function min(n1, n2) {
    if (n1 <= n2) {
        return n1
    } else {
        return n2
    }
}

// Calcular a media com 3 valores e descartar a menor
function media(n1, n2, n3) {
    const notaMenor = min(n1, min(n2, n3)) // a func min vai calcular a menor nota das 3 apresentadas da func media
    if (notaMenor == n1) {
        return (n2 + n3) / 2
    } else if (notaMenor == n2) {
        return (n1 + n3) / 2
    } else {
        return (n1 + n2) / 2
    }

}

// Converter a media para um dos status: APROVADO, RECUPERACAO, REPROVADO
function statusMedia(media) {
    if (media >= 7) {
        return "Aprovado!"
    } else if (media >= 4) {
        return "Recuperacao"
    } else {
        return "Reprovado"
    }
}

console.log(statusMedia(media(nota1, nota2, nota3)))