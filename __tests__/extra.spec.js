import { custom, reset } from '../dist/extra'

describe('custom classes', () => {
	test('default usage', () =>
		expect(custom('transition', 'all')).toBe('transition-all'))

	test('with curring', () => {
		const transition = custom('transition')
		expect(transition('all')).toBe('transition-all')
	})

	test('with multiple attributes', () => {
		expect(custom('transition', 'all', 100, 'ease')).toBe(
			'transition-all transition-100 transition-ease'
		)

		const transition = custom('transition')
		expect(transition('all', 100, 'ease')).toBe(
			'transition-all transition-100 transition-ease'
		)
	})
})

describe('dom style reset classes', () => {
	test('default usage', () => {
		expect(reset()).toBe('')
		expect(reset('a')).toBe('outline-none no-underline')
		expect(reset('input')).toBe('outline-none')
		expect(reset('button')).toBe('focus:outline-none')
	})
})
