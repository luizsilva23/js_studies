function contar(){
    var start = window.document.getElementById('istart')
    var end = window.document.getElementById('iend')
    var step = window.document.getElementById('istep')
    var res = window.document.getElementById('res')
   
    if (start.value.length == 0 || end.value.length == 0|| step.value.length == 0){
        res.innerHTML = 'Impossível Contar!'
        alert('ERROR: Campo vazio!')
        
    } else{
        res.innerHTML = 'Contando... <br>'
        var s = Number(start.value)
        var e = Number(end.value)
        var st = Number(step.value)
        if (st <= 0){
            window.alert('Passo Inválido! Considerando Passo 1')
            st = 1
        }
        if(s < e){
            for(s; s <= e; s += st){
                res.innerHTML += ` ${s} \u{1F449}`
            }
        } else{
            for(s; s >= e; s -= st){
                res.innerHTML += ` ${s} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}