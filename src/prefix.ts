import { Currying } from './_utils/types'

const addPrefix = (prefix: string, classes: string[]): string =>
	`${prefix}:${classes.join(' ').replace(/\s([a-zA-Z\-])/g, ` ${prefix}:$1`)}`

export const screen = (
	variant: string,
	...classes: string[]
): string | Currying =>
	classes.length
		? addPrefix(variant, classes)
		: (...classes: string[]): string => addPrefix(variant, classes)

type Status =
	| 'hover'
	| 'focus'
	| 'active'
	| 'group-hover'
	| 'focus-within'
	| 'disabled'
	| 'visited'

export const status = (
	variant: Status,
	...classes: string[]
): string | Currying =>
	classes.length
		? addPrefix(variant, classes)
		: (...classes: string[]): string => addPrefix(variant, classes)

type Child = 'first' | 'last' | 'odd' | 'even'

export const child = (
	variant: Child,
	...classes: string[]
): string | Currying =>
	classes.length
		? addPrefix(variant, classes)
		: (...classes: string[]): string => addPrefix(variant, classes)
