import { screen, status, child } from '../dist/prefix'
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

	test('with currying', () => {
		const hover = status('hover')
		expect(hover('mx-3', 'text-xl')).toBe('hover:mx-3 hover:text-xl')
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

describe('nth child classes', () => {
	test('default usage', () => {
		expect(child('first', 'mx-3', 'text-xl')).toBe('first:mx-3 first:text-xl')
		expect(child('last', 'mx-3', 'text-xl')).toBe('last:mx-3 last:text-xl')
		expect(child('odd', 'mx-3', 'text-xl')).toBe('odd:mx-3 odd:text-xl')
		expect(child('even', 'mx-3', 'text-xl')).toBe('even:mx-3 even:text-xl')
	})

	test('with currying', () => {
		const first = child('first')
		expect(first('mx-3', 'text-xl')).toBe('first:mx-3 first:text-xl')
	})

	test('with other functions', () => {
		const first = child('first')
		expect(first('mx-3', rounded(1), size(40))).toBe(
			'first:mx-3 first:rounded-1 first:w-40 first:h-40'
		)
	})
})

describe('combine screen and status prefix', () => {
	test('combine', () => {
		const xl = screen('xl')
		const hover = child('hover')
		expect(xl(hover('mx-3', rounded(1), size(40)))).toBe(
			'xl:hover:mx-3 xl:hover:rounded-1 xl:hover:w-40 xl:hover:h-40'
		)
	})
})
