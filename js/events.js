import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonlightTheme,
	buttondarkTheme,
  themes,
  forestButton,
  rainButton,
  fireplaceButton,
  cafeButton,
  forestVolume,
	rainVolume,
	fireplaceVolume,
	cafeVolume
} from './elements.js'

export default function ({ timer, controls, sounds }) {
  buttonPlay.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPress)
    controls.play()
    timer.countdown()
  })

  buttonPause.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPress)
    controls.pause()
    timer.hold()
  })

  buttonStop.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPress)
    controls.pause()
    timer.reset()
  })

  buttonMore.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPress)
    timer.more()
  })

  buttonLess.addEventListener('click', function () {
    sounds.pressButton(sounds.buttonPress)
    timer.less()
  })

  forestButton.addEventListener('click', function () {
    controls.toggle(forestButton)
    sounds.playSounds(sounds.forestSounds, forestButton)
  })

  forestVolume.addEventListener('input', function () {
		sounds.adjustVolume(sounds.forestSounds, forestVolume.value)
	})

  rainButton.addEventListener('click', function () {
    controls.toggle(rainButton)
    sounds.playSounds(sounds.rainSounds, rainButton)
  })

  rainVolume.addEventListener('input', function () {
		sounds.adjustVolume(sounds.rainSounds, rainVolume.value)
	})

  fireplaceButton.addEventListener('click', function () {
    controls.toggle(fireplaceButton)
    sounds.playSounds(sounds.fireplaceSounds, fireplaceButton)
  })

  fireplaceVolume.addEventListener('input', function () {
		sounds.adjustVolume(sounds.fireplaceSounds, fireplaceVolume.value)
	})

  cafeButton.addEventListener('click', function () {
    controls.toggle(cafeButton)
    sounds.playSounds(sounds.cafeSounds, cafeButton)
  })

  cafeVolume.addEventListener('input', function () {
		sounds.adjustVolume(sounds.cafeSounds, cafeVolume.value)
	})

  buttonlightTheme.addEventListener('click', function () {
    controls.toggleTheme(buttonlightTheme, themes),
    controls.toggleTheme(buttondarkTheme)
  })

  buttondarkTheme.addEventListener('click', function () {
    controls.toggleTheme(buttonlightTheme, themes),
    controls.toggleTheme(buttondarkTheme)
  })
}
