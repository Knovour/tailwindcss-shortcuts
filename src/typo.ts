import { create, format, toClassList } from './_utils/helpers'

export const font = (...args: string[]): string =>
	format(
		toClassList(create('font'), args)
			.replace('font-smooth', 'antialiased')
			.replace('font-i', 'italic')
	)

export const list = (...args: string[]): string =>
	format(toClassList(create('list'), args))

export const text = (...args: string[]): string =>
	format(
		toClassList(create('text'), args)
			.replace(/text-(upper|lower)/, '$1case')
			.replace('text-cap', 'capitalize')
	)
