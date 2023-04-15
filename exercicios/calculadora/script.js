

function somar(){
    let a = document.getElementById('x1')
    let x1 = Number(a.value)
    let b = document.getElementById('x2')
    let x2 = Number(b.value)
    let res = document.getElementById('resultado')
    res.textContent = x1 + x2
}

function subtrair(){
    let a = document.getElementById('x1')
    let x1 = Number(a.value)
    let b = document.getElementById('x2')
    let x2 = Number(b.value)
    let res = document.getElementById('resultado')
    res.textContent = x1 - x2
}

function multiplicar(){
    let a = document.getElementById('x1')
    let x1 = Number(a.value)
    let b = document.getElementById('x2')
    let x2 = Number(b.value)
    let res = document.getElementById('resultado')
    res.textContent = x1 * x2
}

function dividir(){
    let a = document.getElementById('x1')
    let x1 = Number(a.value)
    let b = document.getElementById('x2')
    let x2 = Number(b.value)
    let res = document.getElementById('resultado')
    res.textContent = x1 / x2
}