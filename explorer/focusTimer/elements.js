
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonMoreMinutes = document.querySelector('.buttonMore')
const buttonLessMinutes= document.querySelector('.buttonMinus')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minuteDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const cardsMusic = Array.from(document.querySelectorAll('.sound'))
const soundFlorest = document.querySelector(".soundTree")
const soundRain = document.querySelector(".soundRain")
const soundCoffeShop = document.querySelector(".soundCoffeShop")
const soundFirePlace = document.querySelector(".soundFirePlace")
const darkMode = document.querySelector(".dark-mode-icon")
const lightMode = document.querySelector(".light-mode-icon")
const $html = document.querySelector("html")


export {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minuteDisplay,
    secondsDisplay,
    cardsMusic,
    buttonMoreMinutes,
    buttonLessMinutes,
    soundCoffeShop,
    soundFirePlace,
    soundRain,
    soundFlorest,
    darkMode,
    lightMode,
    $html
}