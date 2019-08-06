import { create, format } from './_utils/helpers'
import { Argument } from './_utils/types'

const generate = (className: string, args: Argument[]) => {
	switch (args.length) {
		case 0:
			return className
		case 1:
			const all = args[0]
			return format(create(className)(!all && all !== 0 ? 'default' : all))
		default:
			const [p1, p2, p3 = p1, p4 = p2] = args
			const currents = [p1, p2, p3, p4]
			const targets =
				className === 'border'
					? ['border-t', 'border-r', 'border-b', 'border-l']
					: ['rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl']

			return format(
				targets.map((target, idx) => create(target)(currents[idx])).join(' ')
			)
	}
}

export const borderWidth = (...args: Argument[]): string =>
	generate('border', args)

export const border = (
	w: Argument | Argument[] = 'default',
	style?: string,
	color?: string
): string => {
	const border = create('border')
	return format(
		`${borderWidth(...[w].flat())} ${border(style)} ${border(color)}`
	)
}

export const rounded = (...args: Argument[]): string =>
	generate('rounded', args)

export const roundedX = (r: Argument = 'default', l: Argument = r): string =>
	format(`${create('rounded-r')(r)} ${create('rounded-l')(l)}`)

export const roundedY = (t: Argument = 'default', b: Argument = t): string =>
	format(`${create('rounded-t')(t)} ${create('rounded-b')(b)}`)
