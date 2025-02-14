let num = [5,8,2,9,3]
num[5] = 6
num.push(7)//acrescenta um elemento na última posição.
console.log(`Nosso vetor: ${num}`)
console.log(`O vetor possui ${num.length} elementos. E o primeiro valor é ${num[0]}.`)
num.sort()//coloca o vetor em ordem crescente.
console.log(`O vetor em ordem crescente: ${num}`)

for (let pos = 0;pos<num.length;pos++){
    console.log(`O ${pos+1}º elemento é ${num[pos]}.`)
}

//Abaixo, forma mais simples de percorrer o vetor:
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

//Procurando um valor na array:
let pos = num.indexOf(8)//Retorna a posição em que o valor entre parênteses está.
console.log(`O valor ${num[pos]} está na posição ${pos}.`)// Se o valor não for encontrado, ele retorna -1.