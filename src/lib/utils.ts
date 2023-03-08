import { Signal } from './types'

export const createSignal = <T>(callback: Signal<T>) => {
	const signal = callback.bind(callback)
	const result = signal()
	return [result, signal] as const
}

export const createSharedSignal = <T>(callback: Signal<T>) => {
	const result = callback.call(callback)

	return <U>(callback: Signal<U, [typeof result]>) => createSignal<U>(() => callback(result))
}
