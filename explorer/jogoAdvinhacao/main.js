//variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector('#inputNumber')
let randomNumber = Math.round(Math.random() * 10)
let attemps = 1;

//eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener('keydown', function (e) {
    if (e.key == "Enter" && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

//funções
function handleTryClick(event) {
    event.preventDefault()
    checkInput()
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h1").innerText = `Acertou em ${attemps} vezes`
    }

    inputNumber.value != "" ? attemps++ : null
    inputNumber.value = "";

}

function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    attemps = 1;
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function checkInput() {
    if (inputNumber.value < 0) {
        inputNumber.value = "";
        attemps--
        alert('Somente número entre 0 e 10')
    } else if (inputNumber.value > 10) {
        inputNumber.value = "";
        attemps--
        alert('Somente número entre 0 e 10')
    }

    attemps <= 0 ? attemps = 1 : null
}
//aaa/aa