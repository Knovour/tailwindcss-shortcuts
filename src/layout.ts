import { create, format, toClassList } from './_utils/helpers'
import { Argument } from './_utils/types'

export const object = (...args: string[]): string =>
	format(toClassList(create('object'), args))

const overflowType = ['auto', 'hidden', 'visible', 'scroll'] as const
type Overflow = typeof overflowType[number]

export const overflow = (yOrAll: Overflow = 'auto', x?: Overflow): string => {
	const oY = overflowType.includes(yOrAll) ? yOrAll : ''
	const oX = x && overflowType.includes(x) ? x : ''

	return !x
		? create('overflow')(oY)
		: `${create('overflow-y')(oY)} ${create('overflow-x')(oX)}`.trim()
}

export const place = (...args: Argument[]): string => {
	if (!args.length) return 'inset-auto'

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

const pos = (position: string, args: Argument[]): string =>
	`${position} ${place(...args)}`

export const absolute = (...args: Argument[]): string => pos('absolute', args)
export const relative = (...args: Argument[]): string => pos('relative', args)
export const fixed = (...args: Argument[]): string => pos('fixed', args)
export const sticky = (...args: Argument[]): string => pos('sticky', args)
