let num = document.querySelector('input#fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
     if(Number(n) >= 1 && Number(n) <=100){
        return true
     } else {
        return false
     }
}
function inLista(n, l){
     if (l.indexOf(Number(n)) != -1){
        return true
     } else {
        return false
     }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       if (Number(num.value) < 10){
         item.text = `Valor 0${num.value} adicionado.`
       } else {
         item.text = `Valor ${num.value} adicionado.`
       }
       lista.appendChild(item)
       res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
     if (valores.length == 0){
      window.alert('Adicione valores antes de finalizar')
     } else {
       let total = valores.length 
       let maior = valores[0]
       let menor = valores[0]
       let soma = 0
       let media = 0
       for( let pos in valores){
           soma += valores[pos]
         if(valores[pos] > maior){
            maior = valores[pos]
           }
           if (valores[pos] < menor){
            menor = valores[pos]
           }
       }
      media = soma/total
      res.innerHTML = ''
      res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p><p> São eles: ${valores}.`
      res.innerHTML += `<p>O maior valor informado é ${maior}.</p><p>O menor valor informado é ${menor}.<p>Somando todos os valores, temos ${soma}.<p>A média dos valores digitados é ${media}.</p>.`

     }
}