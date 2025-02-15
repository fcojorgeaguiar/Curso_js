//Função para calcular o fatorial de um número
function fatorial(n){
    let fat = 1
    for(let c = n; n > 1; c--){
        fat*=c
    }
    return fat
}

console.log(fatorial(9))
