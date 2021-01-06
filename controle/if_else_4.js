const hora = 23
let saudacao

if (hora < 12) {
    saudacao = "Bom dia!"

// formatação alternativa ao exemplo 3
} else if (hora < 18) {
    saudacao = "Boa tarde!"
} else if (hora < 22) {
    saudacao = "Boa noite!"
} else { 
    saudacao = "Vai dormir!"
}

console.log(saudacao)