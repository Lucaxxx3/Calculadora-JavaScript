const result = document.querySelector("#ip.result")
const butttons = document.querySelector("#button")

console.log(result)
console.log(buttons)

function appendToDisplay(value) {
    const display = document.getElementById(result)
    display.value += value
}

function clearDisplay() {
    const display = document.getElementById(result)
    display.value = ""
}

function calculateResult(){
    const display = document.getElementById(result)
    try {
        display.value = eval(display.value)
    } catch(error){
        display.value = "Erro"
    }
}