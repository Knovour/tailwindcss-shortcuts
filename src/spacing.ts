import { create, format } from './_utils/helpers'
import { Arg } from './_utils/types'

const spacing = (type: string, args: Arg[]): string => {
	if (!args.length) return ''

	const targets = [[''], ['y', 'x'], ['t', 'x', 'b'], ['t', 'r', 'b', 'l']]

	return format(
		targets[args.slice(0, 4).length - 1]
			.map((target, idx) => create(`${type}${target}`)(args[idx]))
			.join(' ')
	)
}

export const margin = (...args: Arg[]): string => spacing('m', args)
export const padding = (...args: Arg[]): string => spacing('p', args)
