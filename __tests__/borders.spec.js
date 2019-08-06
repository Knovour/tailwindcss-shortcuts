import { border, borderWidth } from '../dist/borders'

describe('borders classes', () => {
	test('default usage', () => {
		expect(border('default', 'solid', 'black')).toBe(
			'border border-solid border-black'
		)

		expect(border(1, 'solid', 'black')).toBe(
			'border-1 border-solid border-black'
		)
	})

	test('with different width', () => {
		expect(border([1], 'dashed', 'white')).toBe(
			'border-1 border-dashed border-white'
		)

		expect(border([1, 2], 'dashed', 'white')).toBe(
			'border-t-1 border-r-2 border-b-1 border-l-2 border-dashed border-white'
		)

		expect(border([1, 2, 3], 'dashed', 'white')).toBe(
			'border-t-1 border-r-2 border-b-3 border-l-2 border-dashed border-white'
		)

		expect(border([1, 2, 3, 4], 'dashed', 'white')).toBe(
			'border-t-1 border-r-2 border-b-3 border-l-4 border-dashed border-white'
		)
	})

	test('with empty attribute', () => {
		expect(border([''], '', 'white')).toBe('border border-white')
		expect(border('', '', 'white')).toBe('border border-white')
		expect(border(undefined, undefined, 'white')).toBe('border border-white')
	})

	test('combined', () => {
		expect(border([1, 'default', '', 4], '', 'white')).toBe(
			'border-t-1 border-r border-l-4 border-white'
		)
	})
})

describe('border width classes', () => {
	test('default usage', () => {
		expect(borderWidth()).toBe('border')
		expect(borderWidth('')).toBe('border')
		expect(borderWidth('default')).toBe('border')
		expect(borderWidth(1)).toBe('border-1')
	})

	test('with different width', () => {
		expect(borderWidth(1, 2)).toBe(
			'border-t-1 border-r-2 border-b-1 border-l-2'
		)

		expect(borderWidth(1, 2, 3)).toBe(
			'border-t-1 border-r-2 border-b-3 border-l-2'
		)

		expect(borderWidth(1, 2, 3, 4)).toBe(
			'border-t-1 border-r-2 border-b-3 border-l-4'
		)

		expect(borderWidth(1, 2, 'default', 4)).toBe(
			'border-t-1 border-r-2 border-b border-l-4'
		)
	})

	test('with empty attribute', () => {
		expect(borderWidth('', 2)).toBe('border-r-2 border-l-2')
		expect(borderWidth(1, '', 3, '')).toBe('border-t-1 border-b-3')
	})

	test('combined', () => {
		expect(borderWidth(1, 'default', 3, '')).toBe(
			'border-t-1 border-r border-b-3'
		)
	})
})
