export default function () {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    let bgAudio = new Audio('./assets/Cafeteria.wav')
    bgAudio.loop = true
    
    function pressButton(){
        buttonPressAudio.play()
    }
    function timeEnd(){
        kitchenTimer.play()
    }
    function changeMusic(typeOfMusic){
        bgAudio.pause()
        bgAudio = new Audio(typeOfMusic)
    }

    function startMusic(){
        
        bgAudio.volume = 1
        bgAudio.play()
    }

    function stopMusic(){
        bgAudio.volume = 0
    }
    
    return{
        pressButton,
        timeEnd,
        bgAudio,
        changeMusic,
        startMusic,
        stopMusic
    }
}