const darkMode = document.querySelector('.dark')
const lightMode = document.querySelector('.light')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const audioForest = document.getElementById('demo')
const audioRain = document.getElementById('audio-rain')
const audioCoffe = document.getElementById('audio-coffe')
const audioFire = document.getElementById('audio-fire')

const buttonPlay = document.querySelector('.play')
const buttonPlayBlack = document.querySelector('.play-black')
const buttonStop = document.querySelector('.stop')
const buttonStopBlack = document.querySelector('.stop-black')
const buttonTurnUp = document.querySelector('.turn-up')
const buttonTurnUpBlack = document.querySelector('.turn-up-black')
const buttonTurnDown = document.querySelector('.turn-down')
const buttonTurnDownBlack = document.querySelector('.turn-down-black')
const buttonForest = document.querySelector('.forest')
const buttonDarkForest = document.querySelector('.dark-forest')
const buttonRain = document.querySelector('.rain')
const buttonDarkRain = document.querySelector('.dark-rain')
const buttonCoffe = document.querySelector('.coffe')
const buttonDarkCoffe = document.querySelector('.dark-coffe')
const buttonFire = document.querySelector('.fire')
const buttonDarkFire = document.querySelector('.dark-fire')
const buttonWhiteForest = document.querySelector('.white-forest') 
const buttonBlueForest = document.querySelector('.blue-forest')
const buttonWhiteRain = document.querySelector('.white-rain')
const buttonBlueRain = document.querySelector('.blue-rain')
const buttonWhiteCoffe = document.querySelector('.white-coffe')
const buttonBlueCoffe = document.querySelector('.blue-coffe')
const buttonWhiteFire = document.querySelector('.white-fire')
const buttonBlueFire = document.querySelector('.blue-fire')

darkMode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode')
    buttonPlay.classList.add('hide')
    buttonPlayBlack.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonStopBlack.classList.remove('hide')
    buttonTurnUp.classList.add('hide')
    buttonTurnUpBlack.classList.remove('hide')
    buttonTurnDown.classList.add('hide')
    buttonTurnDownBlack.classList.remove('hide')
    darkMode.classList.add('hide')
    lightMode.classList.remove('hide')

    buttonForest.classList.add('hide')
    buttonWhiteForest.classList.remove('hide')
    buttonDarkForest.classList.add('hide')

    buttonRain.classList.add('hide')
    buttonWhiteRain.classList.remove('hide')
    buttonDarkRain.classList.add('hide')

    buttonCoffe.classList.add('hide')
    buttonWhiteCoffe.classList.remove('hide')
    buttonDarkCoffe.classList.add('hide')

    buttonFire.classList.add('hide')
    buttonWhiteFire.classList.remove('hide')
    buttonDarkFire.classList.add('hide')
})

lightMode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode')
    darkMode.classList.remove('hide')
    lightMode.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonPlayBlack.classList.add('hide')
    buttonStop.classList.remove('hide')
    buttonStopBlack.classList.add('hide')
    buttonTurnUp.classList.remove('hide')
    buttonTurnUpBlack.classList.add('hide')
    buttonTurnDown.classList.remove('hide')
    buttonTurnDownBlack.classList.add('hide')

    buttonWhiteForest.classList.add('hide')
    buttonForest.classList.remove('hide')
    buttonBlueForest.classList.add('hide')

    buttonWhiteRain.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonBlueRain.classList.add('hide')

    buttonWhiteCoffe.classList.add('hide')
    buttonCoffe.classList.remove('hide')
    buttonBlueCoffe.classList.add('hide')

    buttonWhiteFire.classList.add('hide')
    buttonFire.classList.remove('hide')
    buttonBlueFire.classList.add('hide')
})

buttonPlay.addEventListener('click', function(){
    countdown()
})

buttonPlayBlack.addEventListener('click', function(){
    countdown()
})

buttonStop.addEventListener('click', function(){
    resetTimer()
})

buttonStopBlack.addEventListener('click', function(){
    resetTimer()
})

buttonTurnUp.addEventListener('click', function(){
    minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) + 5).padStart(2, '0');
})

buttonTurnUpBlack.addEventListener('click', function(){
    minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) + 5).padStart(2, '0');
})

buttonTurnDown.addEventListener('click', function(){
    minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) - 5).padStart(2, '0');
    if (minutesDisplay.textContent <= 0) {
        clearTimeout(timerTimeOut)
        resetTimer()
    } 
})

buttonTurnDownBlack.addEventListener('click', function(){
    minutesDisplay.textContent = String(parseInt(minutesDisplay.textContent) - 5).padStart(2, '0');
    if (minutesDisplay.textContent <= 0) {
        clearTimeout(timerTimeOut)
        resetTimer()
    } 
})

buttonForest.addEventListener('click', function(){
    buttonForest.classList.add('hide')
    buttonDarkForest.classList.remove('hide')
    audioForest.play()
})

buttonDarkForest.addEventListener('click', function(){
    buttonForest.classList.remove('hide')
    buttonDarkForest.classList.add('hide')
    audioForest.pause()
})

buttonRain.addEventListener('click', function(){
    buttonRain.classList.add('hide')
    buttonDarkRain.classList.remove('hide')
    audioRain.play()
})

buttonDarkRain.addEventListener('click', function(){
    buttonRain.classList.remove('hide')
    buttonDarkRain.classList.add('hide')
    audioRain.pause()
})

buttonCoffe.addEventListener('click', function(){
    buttonCoffe.classList.add('hide')
    buttonDarkCoffe.classList.remove('hide')
    audioCoffe.play()
})

buttonDarkCoffe.addEventListener('click', function(){
    buttonCoffe.classList.remove('hide')
    buttonDarkCoffe.classList.add('hide')
    audioCoffe.pause()
})

buttonFire.addEventListener('click', function(){
    buttonFire.classList.add('hide')
    buttonDarkFire.classList.remove('hide')
    audioFire.play()
})

buttonDarkFire.addEventListener('click', function(){
    buttonFire.classList.remove('hide')
    buttonDarkFire.classList.add('hide')
    audioFire.pause()
})

buttonWhiteForest.addEventListener('click', function(){
    buttonWhiteForest.classList.add('hide')
    buttonBlueForest.classList.remove('hide')
    audioForest.play()
})

buttonBlueForest.addEventListener('click', function(){
    buttonWhiteForest.classList.remove('hide')
    buttonBlueForest.classList.add('hide')
    audioForest.pause()
})

buttonWhiteRain.addEventListener('click', function(){
    buttonWhiteRain.classList.add('hide')
    buttonBlueRain.classList.remove('hide')
    audioRain.play()
})

buttonBlueRain.addEventListener('click', function(){
    buttonWhiteRain.classList.remove('hide')
    buttonBlueRain.classList.add('hide')
    audioRain.pause()
})

buttonBlueCoffe.addEventListener('click', function(){
    buttonWhiteCoffe.classList.remove('hide')
    buttonBlueCoffe.classList.add('hide')
    audioCoffe.pause()
})

buttonWhiteCoffe.addEventListener('click', function(){
    buttonWhiteCoffe.classList.add('hide')
    buttonBlueCoffe.classList.remove('hide')
    audioCoffe.play()
})

buttonBlueFire.addEventListener('click', function(){
    buttonWhiteFire.classList.remove('hide')
    buttonBlueFire.classList.add('hide')
    audioFire.pause()
})

buttonWhiteFire.addEventListener('click', function(){
    buttonWhiteFire.classList.add('hide')
    buttonBlueFire.classList.remove('hide')
    audioFire.play()
})

function resetTimer() {
    updateTimerDisplay(minutes, 0 )
    clearTimeout(timerTimeOut)
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateTimerDisplay(minutes, 0)

      if (minutes <= 0) {
          return
      } 

      if (seconds <= 0 ) {
        seconds = 60
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }