function calcular(){
    var inu = window.document.getElementById('in')
    var tabu = window.document.getElementById('itab')
    
    
    if (inu.value.length == 0){
        alert('ERROR: Dados Inválidos!')
    } else {
        numero = Number(inu.value)
        tabu.innerHTML = ''
        for (var c = 0; c <= 10; c++ ){
            var item = document.createElement('option')
            item.text = `${numero} X ${c} = ${numero*c}`
            tabu.appendChild(item)
        }
    }
}