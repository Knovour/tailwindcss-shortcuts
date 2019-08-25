import { create, format } from './_utils/helpers'
import { Arg } from './_utils/types'

const generate = (className: string, args: Arg[]) => {
	switch (args.length) {
		case 0:
			return className
		case 1:
			const [all] = args
			return !all && all !== 0 ? '' : format(create(className)(all))
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

export const borderWidth = (...args: Arg[]): string => generate('border', args)

export const border = (
	w: Arg | Arg[],
	style?: string,
	color?: string
): string => {
	const border = create('border')
	return (
		format(`${borderWidth(...[w].flat())} ${border(style)} ${border(color)}`) ||
		'border'
	)
}

export const rounded = (...args: Arg[]): string =>
	args.length ? generate('rounded', args) : 'rounded'

export const roundedX = (r: Arg, l: Arg = r): string =>
	format(`${create('rounded-r')(r)} ${create('rounded-l')(l)}`) ||
	'rounded-r rounded-l'

export const roundedY = (t: Arg, b: Arg = t): string =>
	format(`${create('rounded-t')(t)} ${create('rounded-b')(b)}`) ||
	'rounded-t rounded-b'
