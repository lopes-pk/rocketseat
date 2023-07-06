import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from './sounds.js'
import { 
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    minuteDisplay,
    secondsDisplay
} from './elements.js'
import Events from './events.js'
    
const sound = Sound()
const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minuteDisplay,
    secondsDisplay,
    resetControls: controls.reset

})

Events({
    sound,
    controls,
    timer
})
