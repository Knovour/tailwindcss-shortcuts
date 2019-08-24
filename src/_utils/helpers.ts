import { Arg } from './types'

export const create = (name: string) => (arg: Arg): string => {
	if (!arg && arg !== 0) return ''

	return arg.toString()[0] === '-' ? `-${name}${arg}` : `${name}-${arg}`
}

export const format = (classes: string): string =>
	classes
		.replace(/\-default/g, '')
		.replace(/ +/g, ' ')
		.trim()

export const toClassList = (
	createClass: (arg: Arg) => string,
	args: Arg[]
): string => args.map(arg => createClass(arg)).join(' ')

export const curry2 = (
	fn: (currentName: string, currentArgs: Arg[]) => string
): ((variant: string, ...args: Arg[]) => any) => (variant, ...args) =>
	args.length ? fn(variant, args) : (...args: Arg[]) => fn(variant, args)
