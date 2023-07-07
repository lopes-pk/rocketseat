import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    cardsMusic,
    buttonLessMinutes,
    buttonMoreMinutes,
    soundCoffeShop,
    soundFirePlace,
    soundFlorest,
    soundRain,
    lightMode,
    darkMode,
    $html

} from './elements.js'

function changeToMute() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
}
export default function ({ sound, controls, timer }) {
    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countDown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click', function () {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', function () {
        timer.reset()
        controls.reset()
        sound.pressButton()
    })

    buttonMoreMinutes.addEventListener('click', function () {
        timer.doAddMinutes(5)
    })
    buttonLessMinutes.addEventListener('click', function () {
        timer.doLessMinutes(5)
    })

    buttonSoundOn.addEventListener('click', function () {
        changeToMute()
        sound.stopMusic()
    })

    buttonSoundOff.addEventListener('click', function () {
        buttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
        sound.startMusic()
    })

    buttonSet.addEventListener('click', function () {
        let newMinutes = controls.getMinutes()

        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

    cardsMusic.forEach((card) => {
        card.addEventListener('click', function () {
            // Remove a classe 'soundIsActive' de todos os cards
            cardsMusic.forEach(card => {
                card.classList.remove('soundIsActive');
            });
            // Adiciona a classe 'soundIsActive' apenas ao card clicado
            this.classList.add('soundIsActive');
        });
    });

    soundFlorest.addEventListener('click', function () {
        sound.changeMusic('./assets/Floresta.wav')
        changeToMute()
    })
    soundRain.addEventListener('click', function () {
        sound.changeMusic('./assets/Chuva.wav')
        changeToMute()
    })

    soundCoffeShop.addEventListener('click', function () {
        sound.changeMusic('./assets/Cafeteria.wav')
        changeToMute()
    })

    soundFirePlace.addEventListener('click', function () {
        sound.changeMusic('./assets/Lareira.wav')
        changeToMute()
    })

    lightMode.addEventListener('click', function(){
        lightMode.classList.add('hide')
        darkMode.classList.remove('hide')
        $html.classList.toggle('dark-mode')
        
    })
    darkMode.addEventListener('click', function(){
        lightMode.classList.remove('hide')
        darkMode.classList.add('hide')
        $html.classList.toggle('dark-mode')
    })
}
