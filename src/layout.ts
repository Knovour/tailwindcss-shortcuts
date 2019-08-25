import { create, format, toClassList } from './_utils/helpers'
import { Arg } from './_utils/types'

export const object = (...args: string[]): string =>
	format(toClassList(create('object'), args))

const overflowType = ['auto', 'hidden', 'visible', 'scroll'] as const
type Overflow = typeof overflowType[number]

export const overflow = (yOrAll: Overflow, x?: Overflow): string => {
	const oY = overflowType.includes(yOrAll) ? yOrAll : ''
	const oX = x && overflowType.includes(x) ? x : ''

	return !x
		? create('overflow')(oY)
		: `${create('overflow-y')(oY)} ${create('overflow-x')(oX)}`.trim()
}

export const place = (...args: Arg[]): string => {
	if (!args.length) return ''

	const directions = [
		['inset'],
		['inset-y', 'inset-x'],
		['top', 'inset-x', 'bottom'],
		['top', 'right', 'bottom', 'left'],
	]

	return format(
		directions[args.slice(0, 4).length - 1]
			.map((target, idx) => create(target)(args[idx]))
			.join(' ')
	)
}

export const absolute = (...args: Arg[]): string => `absolute ${place(...args)}`
export const relative = (...args: Arg[]): string => `relative ${place(...args)}`
export const fixed = (...args: Arg[]): string => `fixed ${place(...args)}`
export const sticky = (...args: Arg[]): string => `sticky ${place(...args)}`
