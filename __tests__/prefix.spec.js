import { screen, status } from '../dist/prefix'
import { rounded } from '../dist/borders'
import { size } from '../dist/sizing'

describe('screen classes', () => {
	test('default usage', () =>
		expect(screen('md', 'mx-3', 'text-xl')).toBe('md:mx-3 md:text-xl'))

	test('with currying', () => {
		const md = screen('md')
		expect(md('mx-3', 'text-xl')).toBe('md:mx-3 md:text-xl')
	})

	test('with other functions', () => {
		const xl = screen('xl')
		expect(xl('mx-3', rounded(1), size(40))).toBe(
			'xl:mx-3 xl:rounded-1 xl:w-40 xl:h-40'
		)
	})
})

describe('status classes', () => {
	test('default usage', () => {
		expect(status('hover', 'mx-3', 'text-xl')).toBe('hover:mx-3 hover:text-xl')
		expect(status('focus', 'mx-3', 'text-xl')).toBe('focus:mx-3 focus:text-xl')
	})

	test('with class alias usage', () =>
		expect(status('all', 'mx-3', 'text-xl')).toBe(
			'hover:mx-3 hover:text-xl focus:mx-3 focus:text-xl active:mx-3 active:text-xl group-hover:mx-3 group-hover:text-xl focus-within:mx-3 focus-within:text-xl'
		))

	test('with currying', () => {
		const hover = status('hover')
		expect(hover('mx-3', 'text-xl')).toBe('hover:mx-3 hover:text-xl')

		const all = status('all')
		expect(all('mx-3', 'text-xl')).toBe(
			'hover:mx-3 hover:text-xl focus:mx-3 focus:text-xl active:mx-3 active:text-xl group-hover:mx-3 group-hover:text-xl focus-within:mx-3 focus-within:text-xl'
		)
	})

	test('with other functions', () => {
		const hover = status('hover')
		expect(hover('mx-3', rounded(1), size(40))).toBe(
			'hover:mx-3 hover:rounded-1 hover:w-40 hover:h-40'
		)
	})
})

describe('combine both', () => {
	test('combine', () => {
		const xl = screen('xl')
		const hover = status('hover')
		expect(xl(hover('mx-3', rounded(1), size(40)))).toBe(
			'xl:hover:mx-3 xl:hover:rounded-1 xl:hover:w-40 xl:hover:h-40'
		)
	})
})
