let preco = 20.90
let desconto = 0.4
let precoComDesconto = preco * (1 - desconto)

console.log(20.9 * 0.6) // valor com desconto
console.log(preco * (1 - desconto)) 
console.log(precoComDesconto) // variavel => primeira letra minusculo e cada nova palavra com maisculo

let nome = "Livro"
let categoria = "Livraria"
console.log("Produto: " + nome 
    + ", Categoria: " + categoria 
    + ", Preço: " + preco 
    + ", Desconto: " + desconto 
    + "Valor Total: " + precoComDesconto) // concatenar string