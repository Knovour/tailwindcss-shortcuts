import { Argument } from './types'

export const create = (name: string) => (arg: Argument): string => {
	if (!arg && arg !== 0) return ''

	return arg.toString()[0] === '-' ? `-${name}${arg}` : `${name}-${arg}`
}

export const format = (classes: string): string =>
	classes
		.replace(/\-default/g, '')
		.replace(/ +/g, ' ')
		.trim()

export const toClassList = (
	createClass: (arg: Argument) => string,
	args: Argument[]
): string => args.map(arg => createClass(arg)).join(' ')

export const curry2 = (
	fn: (currentName: string, currentArgs: Argument[]) => string
): ((variant: string, ...args: Argument[]) => any) => (variant, ...args) =>
	args.length ? fn(variant, args) : (...args: Argument[]) => fn(variant, args)
