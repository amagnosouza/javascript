const futuro = Date.now() + 10000 // 10 segundos
let qtd = 0

while (Date.now() < futuro) {
    qtd++
}
//Date.now() = 01/01/1970 até hoje!
console.log("Qtde: " + qtd)