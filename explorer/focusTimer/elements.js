
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
const cards = Array.from(document.querySelectorAll('.sound'))

export {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minuteDisplay,
    secondsDisplay,
    cards,
    buttonMoreMinutes,
    buttonLessMinutes
}