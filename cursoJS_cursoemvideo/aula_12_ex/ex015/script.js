function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO: Verifique as informações e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'cut-bebe-m.png')
            } else if(idade < 21){
                // jovem
                img.setAttribute('src', 'cut-jovem-m.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'cut-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'cut-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'cut-bebe-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'cut-jovem-f.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'cut-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'cut-idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }

}