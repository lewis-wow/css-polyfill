import { createSignal } from './utils'

export const dvh = (property = 'dvh') => {
	const [dvh, signal] = createSignal(() => {
		const dvh = window.innerHeight * 0.01
		document.documentElement.style.setProperty(`--${property}`, `${dvh}px`)
		return dvh
	})

	window.addEventListener('resize', signal)

	return dvh
}

export const dvw = (property = 'dvw') => {
	const [dvw, signal] = createSignal(() => {
		const dvw = window.innerWidth * 0.01
		document.documentElement.style.setProperty(`--${property}`, `${dvw}px`)
		return dvw
	})

	window.addEventListener('resize', signal)

	return dvw
}
