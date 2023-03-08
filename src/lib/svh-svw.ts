import { createSignal } from './utils'

export const svh = (property = 'svh') => {
	const [svh, signal] = createSignal(() => {
		const svh = document.documentElement.clientHeight * 0.01
		document.documentElement.style.setProperty(`--${property}`, `${svh}px`)
		return svh
	})

	window.addEventListener('resize', signal)

	return svh
}

export const svw = (property = 'svw') => {
	const [svw, signal] = createSignal(() => {
		const svw = document.documentElement.clientWidth * 0.01
		document.documentElement.style.setProperty(`--${property}`, `${svw}px`)
		return svw
	})

	window.addEventListener('resize', signal)

	return svw
}
