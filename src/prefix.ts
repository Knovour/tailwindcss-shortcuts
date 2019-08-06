const addPrefix = (prefix: string, classes: string[]): string =>
	`${prefix}:${classes.join(' ').replace(/\s([a-zA-Z])/g, ` ${prefix}:$1`)}`

export const screen = (
	media: string,
	...classes: string[]
): string | ((...classes: string[]) => string) =>
	classes.length
		? addPrefix(media, classes)
		: (...classes: string[]) => addPrefix(media, classes)

type Status =
	| 'all'
	| 'hover'
	| 'focus'
	| 'active'
	| 'group-hover'
	| 'focus-within'

const generate = (status: Status, classes: string[]) =>
	status === 'all'
		? ['hover', 'focus', 'active', 'group-hover', 'focus-within']
				.map(prefix => addPrefix(prefix, classes))
				.join(' ')
		: addPrefix(status, classes)

export const status = (
	status: Status,
	...classes: string[]
): string | ((...classes: string[]) => string) =>
	classes.length
		? generate(status, classes)
		: (...classes: string[]) => generate(status, classes)
