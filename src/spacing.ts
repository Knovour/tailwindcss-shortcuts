import { create, format } from './_utils/helpers'
import { Argument } from './_utils/types'

const spacing = (type: string, args: Argument[]): string => {
	if (!args.length) return type === 'm' ? 'm-auto' : 'p-0'

	const targets = [[''], ['y', 'x'], ['t', 'x', 'b'], ['t', 'r', 'b', 'l']]

	return format(
		targets[args.slice(0, 4).length - 1]
			.map((target, idx) => create(`${type}${target}`)(args[idx]))
			.join(' ')
	)
}

export const margin = (...args: Argument[]): string => spacing('m', args)
export const padding = (...args: Argument[]): string => spacing('p', args)
