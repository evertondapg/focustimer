const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMore = document.querySelector('.more')
const buttonLess = document.querySelector('.less')
const buttonlightTheme = document.querySelector('.light')
const buttondarkTheme = document.querySelector('.dark')
const themes = document.querySelector('.themes')

const forestButton = document.querySelector('.forest')
const rainButton = document.querySelector('.rain')
const fireplaceButton = document.querySelector('.fireplace')
const cafeButton = document.querySelector('.cafe')

const forestVolume = forestButton.querySelector('input')
const rainVolume = rainButton.querySelector('input')
const fireplaceVolume = fireplaceButton.querySelector('input')
const cafeVolume = cafeButton.querySelector('input')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

export {
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
	cafeVolume,
	minutesDisplay,
	secondsDisplay
}