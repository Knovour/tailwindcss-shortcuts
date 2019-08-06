import { rounded, roundedX, roundedY } from '../dist/borders'

describe('border radius classes', () => {
	test('default usage', () => {
		expect(rounded()).toBe('rounded')
		expect(rounded(1)).toBe('rounded-1')
	})

	test('with different radius', () => {
		expect(rounded(1, 2)).toBe(
			'rounded-tl-1 rounded-tr-2 rounded-br-1 rounded-bl-2'
		)

		expect(rounded(1, 2, 3)).toBe(
			'rounded-tl-1 rounded-tr-2 rounded-br-3 rounded-bl-2'
		)

		expect(rounded(1, 2, 3, 4)).toBe(
			'rounded-tl-1 rounded-tr-2 rounded-br-3 rounded-bl-4'
		)

		expect(rounded(1, 2, 'default', 4)).toBe(
			'rounded-tl-1 rounded-tr-2 rounded-br rounded-bl-4'
		)
	})

	test('with empty attribute', () => {
		expect(rounded(1, 2, '', 4)).toBe('rounded-tl-1 rounded-tr-2 rounded-bl-4')
		expect(rounded(1, '', '', 4)).toBe('rounded-tl-1 rounded-bl-4')
	})

	test('combine', () => {
		expect(rounded(1, '', 'default', 4)).toBe(
			'rounded-tl-1 rounded-br rounded-bl-4'
		)
	})
})

describe('border radius X: right and left', () => {
	test('default usage', () => {
		expect(roundedX()).toBe('rounded-r rounded-l')
		expect(roundedX('default')).toBe('rounded-r rounded-l')
		expect(roundedX(1)).toBe('rounded-r-1 rounded-l-1')
	})

	test('with different radius', () => {
		expect(roundedX(1, 2)).toBe('rounded-r-1 rounded-l-2')
		expect(roundedX(1, 'default')).toBe('rounded-r-1 rounded-l')
	})

	test('with empty attribute', () => {
		expect(roundedX('', 2)).toBe('rounded-l-2')
	})
})

describe('border radius Y: top and bottom', () => {
	test('default usage', () => {
		expect(roundedY()).toBe('rounded-t rounded-b')
		expect(roundedY('default')).toBe('rounded-t rounded-b')
		expect(roundedY(1)).toBe('rounded-t-1 rounded-b-1')
	})

	test('with different radius', () => {
		expect(roundedY(1, 2)).toBe('rounded-t-1 rounded-b-2')
		expect(roundedY(1, 'default')).toBe('rounded-t-1 rounded-b')
	})

	test('with empty attribute', () => {
		expect(roundedY('', 2)).toBe('rounded-b-2')
	})
})
