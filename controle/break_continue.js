// break
for (let index = 1; index <= 5; index++) {
    if (index === 2) {
        break // vai sair do contexto atual do for
        //EX:
        // 1
        // proximo for
    }
    console.log(index);
}
// continue
for (let index = 1; index <= 5; index++) {
    if (index ===2) {
        continue // vai para a proxima repeticao sem executar o codigo abaixo
        //EX:
        // 1
        // 3
        // 4
        // 5
    }
    console.log(index);
}