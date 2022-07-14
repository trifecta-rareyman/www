/* eslint-disable no-undef */

// With the above scripts loaded, you can call `tippy()` with a CSS
// selector and a `content` prop:

// tippy('[data-tippy-content]', {
// 	trigger: 'click',
// 	inertia: true,
// 	placement: 'right',
// })

const tippySettings = {
	theme: 'wcgtrifecta',
	allowHTML: true,
	trigger: 'click',
	inertia: true,
	placement: 'right',
	// hideOnClick: false, // while developing
	onShow(instance) {
		// console.log(instance.reference.id)
		// console.log(instance)
		document.getElementById(instance.reference.id).classList.add('expand')
	},
	onHide(instance) {
		document.getElementById(instance.reference.id).classList.remove('expand')
	},
}

const item11tip = document.getElementById('item-1-1-tip')
const item12tip = document.getElementById('item-1-2-tip')
const item131tip = document.getElementById('item-13-1-tip')
const item121tip = document.getElementById('item-12-1-tip')

tippy('#item-1-1', { content: item11tip.innerHTML, ...tippySettings })
tippy('#item-1-2', { content: item12tip.innerHTML, ...tippySettings })
tippy('#item-13-1', { content: item131tip.innerHTML, ...tippySettings })
tippy('#item-12-1', { content: item121tip.innerHTML, ...tippySettings })

const tippyWeekSettings = {
	theme: 'wcgtrifecta-week', // changing name so we can target CSS for just these pop-overs
	allowHTML: true,
	trigger: 'click',
	inertia: true,
	placement: 'top',
	interactive: true, // this allows html/links to work inside
	maxWidth: 'none', // this will allow css to render properly
	// hideOnClick: false, // while developing
	onShow(instance) {
		// console.log(instance.reference.id)
		// console.log(instance)
		document.getElementById(instance.reference.id).classList.add('expand')
	},
	onHide(instance) {
		document.getElementById(instance.reference.id).classList.remove('expand')
	},
}

const a = document.getElementById('dot-5-tip')
console.log(a)

tippy('#dot-5', { content: a.innerHTML, ...tippyWeekSettings })

/* alpine
============================================================================= */

/* dark mode
============================================================================= */
// var darkMode
// // Whenever the user explicitly chooses light mode
// // localStorage.theme = 'light'
// // Whenever the user explicitly chooses dark mode
// // localStorage.theme = 'dark'
// // Whenever the user explicitly chooses to respect the OS preference
// // localStorage.removeItem('theme')

// // toggle button
// let htmlElement = document.querySelector('html')
// // let btnDarkToggle = document.querySelector('#btnDarkToggle')
// // let btnDarkClear = document.querySelector('#btnDarkClear')

// window.onload = () => {
// 	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// 	// first, check localstorage
// 	if ('theme' in localStorage) {
// 		if (localStorage.theme === 'dark') {
// 			darkMode = true
// 			localStorage.theme = 'dark'
// 			htmlElement.classList.add('dark')
// 			document.querySelector('.switchDark').checked = true
// 		} else {
// 			darkMode = false
// 			localStorage.theme = 'light'
// 			htmlElement.classList.remove('dark')
// 			document.querySelector('.switchDark').checked = false
// 		}
// 	}
// 	// next, check device preference
// 	else {
// 		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 			darkMode = true
// 			localStorage.theme = 'dark'
// 			htmlElement.classList.add('dark')
// 		} else {
// 			darkMode = false
// 			localStorage.theme = 'light'
// 			htmlElement.classList.remove('dark')
// 		}
// 	}
// 	console.log(`Dark Mode: ${darkMode}`)
// }

// // btnDarkToggle.onclick = function () {
// // 	// console.log('clicked!')
// // 	// console.log(btnToggle.classList)
// // 	if (darkMode) {
// // 		htmlElement.classList.remove('dark')
// // 		darkMode = false
// // 		localStorage.theme = 'light'
// // 	} else {
// // 		htmlElement.classList.add('dark')
// // 		darkMode = true
// // 		localStorage.theme = 'dark'
// // 	}
// // 	console.log(`Dark Mode: ${darkMode}`)
// // }

// // eslint-disable-next-line no-unused-vars
// function switchDarkToggle(elem) {
// 	if (elem.checked) {
// 		darkMode = true
// 		localStorage.theme = 'dark'
// 		document.querySelector('html').classList.add('dark')
// 	} else {
// 		darkMode = false
// 		localStorage.theme = 'light'
// 		document.querySelector('html').classList.remove('dark')
// 	}
// }
