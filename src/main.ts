import { dvh, dvw } from './lib/dvh-dvw'

const h = dvh()
const w = dvw()

console.log(h, w)

const el = document.createElement('div')
el.style.height = 'calc(var(--dvh) * 100)'
document.body.appendChild(el)
