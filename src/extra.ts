import { create, format, toClassList } from './_utils/helpers'
import { Argument } from './_utils/types'

export const custom = (
	className: string = '',
	...args: Argument[]
): string | ((...args: Argument[]) => string) =>
	args.length
		? format(toClassList(create(className), args))
		: (...args: Argument[]) => format(toClassList(create(className), args))

type Elem = 'a' | 'input' | 'button'

export const reset = (elem?: Elem): string => {
	const resetStyle = {
		a: 'outline-none no-underline',
		input: 'outline-none',
		button: 'focus:outline-none',
	}

	return resetStyle[elem] || ''
}
