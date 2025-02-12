function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('resultado')
   if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else{
    var fsex = document.getElementsByName('radsexo')
    var idade = ano - Number(fano.value)
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        gen = 'Homem'
        document.body.style.background='#0063f8'
        if (idade >=0 && idade < 10){
            img.setAttribute('src', 'Imagens/homem-bebê.png')
        } else if (idade < 21){
             img.setAttribute('src', 'Imagens/homem-jovem.png')
        } else if (idade < 50){
            img.setAttribute('src', 'Imagens/homem-adulto.png')
        } else{
             img.setAttribute('src', 'Imagens/homem-idoso.png')
        }
    } else if (fsex[1].checked){
        gen = 'Mulher'
        document.body.style.background='#f800e3'
        if (idade >=0 && idade < 10){
            img.setAttribute('src', 'Imagens/mulher-bebê.png')
        } else if (idade < 21){
             img.setAttribute('src', 'Imagens/mulher-jovem.png')
        } else if (idade < 50){
             img.setAttribute('src', 'Imagens/mulher-adulta.png')
        } else{
            img.setAttribute('src', 'Imagens/mulher-idosa.png')
        }
    }
    res.style.textAlign="center"
    res.innerHTML =`Detectamos ${gen} com ${idade} anos.`
    res.appendChild(img)
}
}
