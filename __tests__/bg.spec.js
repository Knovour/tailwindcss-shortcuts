import { bg } from '../dist'

describe('background classes', () => {
	test('with multiple attributes', () => {
		expect(bg('cover', 'center', 'fixed')).toBe('bg-cover bg-center bg-fixed')
		expect(bg('cover', 'no-repeat', '', 'black')).toBe(
			'bg-cover bg-no-repeat bg-black'
		)
	})

	test('with class alias', () => {
		expect(bg('full-cover')).toBe('bg-cover bg-center bg-no-repeat')
	})

	test('with empty attribute', () => {
		expect(bg('', 'black', 'fixed')).toBe('bg-black bg-fixed')
	})

	test('combined', () => {
		expect(bg('full-cover', '', 'black', 'fixed')).toBe(
			'bg-cover bg-center bg-no-repeat bg-black bg-fixed'
		)
	})
})
