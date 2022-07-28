export default function () {
	const kitchenTimer = new Audio(
		'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
	)
	const buttonPress = new Audio(
		'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
	)
	const forestSounds = new Audio('../sounds/forest.wav')
	const cafeSounds = new Audio('../sounds/cafe.wav')
	const rainSounds = new Audio('../sounds/rain.wav')
	const fireplaceSounds = new Audio('../sounds/fireplace.wav')

	
	function pressButton(button) {
		button.play()
	}

	function timeEnd() {
		pressButton(kitchenTimer)
	}

	function playSounds(sound, card) {
		sound.loop = true
		let isActive = card.classList.contains('active')
		isActive === false ? sound.pause() : sound.play()
	}

	function adjustVolume(sound, volume) {
		sound.volume = volume
	}


	return {
		pressButton,
		timeEnd,
		playSounds,
		adjustVolume,
		forestSounds,
		cafeSounds,
		rainSounds,
		fireplaceSounds,
		buttonPress
	}
}