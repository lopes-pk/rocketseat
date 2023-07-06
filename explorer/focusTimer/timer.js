import Sounds from './sounds.js'

export default function Timer({
    minuteDisplay,
    secondsDisplay,
    resetControls,
}) {

    let timerTimeOut;
    let minutes = Number(minuteDisplay.textContent)

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minuteDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
        
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countDown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minuteDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0 
            updateDisplay(minutes, 0)

            if (isFinished) {
                resetControls()
                updateDisplay()
                Sounds().timeEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countDown()
        }, 1000)
    }

    function updateMinutes(newMinutes){
        minutes = newMinutes
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    function doAddMinutes(minutesAdded){
        const newMinutes= Number(minuteDisplay.textContent) + minutesAdded
        updateDisplay(newMinutes,0)
    }

    function doLessMinutes(minutesLessed){
        const newMinutes = Number(minuteDisplay.textContent) - minutesLessed 
        newMinutes = newMinutes < 0? 0 : updateDisplay(newMinutes,0)
    }
    
    return ({
        updateDisplay,
        reset,
        countDown,
        updateMinutes,
        doAddMinutes,
        doLessMinutes,
        hold
    })
}

