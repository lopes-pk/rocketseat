import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    cards,
    buttonLessMinutes,
    buttonMoreMinutes

} from './elements.js'


export default function ({ sound,controls,timer }) {
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

    buttonMoreMinutes.addEventListener('click', function(){
        timer.doAddMinutes(5)
    })
    buttonLessMinutes.addEventListener('click', function(){
        timer.doLessMinutes(5)
    })

    buttonSoundOn.addEventListener('click', function () {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    })
    buttonSoundOff.addEventListener('click', function () {
        buttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
        sound.bgAudio.play()
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

    cards.forEach((card,i) => {
        card.addEventListener('click', function () {
            // Remove a classe 'soundIsActive' de todos os cards
            cards.forEach(card => {
                card.classList.remove('soundIsActive');
            });
            // Adiciona a classe 'soundIsActive' apenas ao card clicado
            this.classList.add('soundIsActive');
            if(i == 0){
                alert('test')
            }
            
        });
    });
}
