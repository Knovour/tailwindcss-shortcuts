import { create, format, toClassList, curry2 } from './_utils/helpers'
import { Arg } from './_utils/types'

export const custom = curry2((className: string = '', args: Arg[]): string =>
	format(toClassList(create(className), args))
)

type Elem = 'a' | 'input' | 'button'

export const reset = (elem?: Elem): string => {
	const resetStyle = {
		a: 'outline-none no-underline',
		input: 'outline-none',
		button: 'focus:outline-none',
	}

	return resetStyle[elem] || ''
}
