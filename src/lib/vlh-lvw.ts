import { createSharedSignal } from './utils'

const fixedHeightWidth = createSharedSignal(() => {
	const div = document.createElement('div')
	div.style.height = '100vh'
	div.style.width = '1px'
	div.style.position = 'fixed'
	div.style.top = '0'
	div.style.left = '0'
	div.style.pointerEvents = 'none'
	div.style.visibility = 'hidden'
	div.style.overflow = 'hidden'
	document.body.appendChild(div)

	const h = div.clientHeight
	const w = div.clientWidth

	div.remove()

	return { h, w }
})

export const lvh = (property = 'lvh') => {
	const [lvh] = fixedHeightWidth(({ h }) => {
		const lvh = h * 0.01
		document.documentElement.style.setProperty(`--${property}`, `${lvh}px`)
		return lvh
	})

	return lvh
}

export const lvw = (property = 'lvw') => {
	const [lvw] = fixedHeightWidth(({ w }) => {
		const lvw = w * 0.01
		document.documentElement.style.setProperty(`--${property}`, `${lvw}px`)
		return lvw
	})

	return lvw
}
