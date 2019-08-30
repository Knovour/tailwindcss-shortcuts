import { curry2 } from './_utils/helpers'

const addPrefix = (prefix: string, classes: string[]): string =>
	`${prefix}:${classes.join(' ').replace(/\s([a-zA-Z\-])/g, ` ${prefix}:$1`)}`

export const screen = curry2((variant: string, classes: string[]): string =>
	addPrefix(variant, classes)
)

export const breakpoints = (mediaGroup: { [key: string]: string }): string =>
	Object.keys(mediaGroup)
		.map(key => addPrefix(key, [mediaGroup[key]]))
		.join(' ')

type Status =
	| 'hover'
	| 'focus'
	| 'active'
	| 'group-hover'
	| 'focus-within'
	| 'disabled'
	| 'visited'

export const status = curry2((variant: Status, classes: string[]): string =>
	addPrefix(variant, classes)
)

type Child = 'first' | 'last' | 'odd' | 'even'

export const child = curry2((variant: Child, classes: string[]): string =>
	addPrefix(variant, classes)
)
