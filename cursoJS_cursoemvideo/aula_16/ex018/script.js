const numberEl = document.getElementById('inum')
const addBtn = document.getElementById('adicionar')
const quadro = document.getElementById('iquadro')
const endBtn = document.getElementById('end-btn')
const appArea = document.getElementById('app-area')
let sum = 0
let numbers = []
let maior = 0
let menor = 0

addBtn.addEventListener("click", function add(){
    if (numbers.includes(numberEl.value)){
        alert('Valor já adicionado.')
    }
    else if (numberEl.value <= 100 && numberEl.value >= 1){
        quadro.innerHTML += `<option>Valor ${numberEl.value} adicionado </option>`
        numbers.push(numberEl.value)
    
    } else {
        alert('Valor Inválido')
    }
    numberEl.value = ''

})

endBtn.addEventListener("click", function analisar(){
    if (numbers.length === 0){
        alert('Digite valores antes de finalizar')
    } else{
        for (let n in numbers){
            sum += Number(numbers[n])
            if (n === "0"){
                menor = numbers[n]
            }
            if (numbers[n] > maior){
                maior = numbers[n]
            }
            if (numbers[n] < menor){
                menor = numbers[n]
            }
        }
        appArea.innerHTML += `<p>Ao todo foram ${numbers.length} números cadastrados.</p>`
        appArea.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        appArea.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        appArea.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
        appArea.innerHTML += `<p>A média dos valores digitados é ${ Math.round(sum/numbers.length) }.</p>`
    }   
})