import { size, maxSize, minSize } from '../dist/sizing'

describe('width and height classes', () => {
	test('default usage', () => {
		expect(size()).toBe('')
		expect(size(10)).toBe('w-10 h-10')
	})

	test('without width', () => expect(size('', 12)).toBe('h-12'))

	test('without height', () => {
		expect(size(12, '')).toBe('w-12')
		expect(size(12, undefined)).toBe('w-12 h-12')
	})

	test('different width and height', () =>
		expect(size(10, 12)).toBe('w-10 h-12'))
})

describe('max width and max height classes', () => {
	test('default usage', () => {
		expect(maxSize()).toBe('')
		expect(maxSize(10)).toBe('max-w-10 max-h-10')
	})

	test('without width', () => expect(maxSize('', 12)).toBe('max-h-12'))

	test('without height', () => {
		expect(maxSize(12, '')).toBe('max-w-12')
		expect(maxSize(12, undefined)).toBe('max-w-12 max-h-12')
	})

	test('different width and height', () =>
		expect(maxSize(10, 12)).toBe('max-w-10 max-h-12'))
})

describe('min width and min height classes', () => {
	test('default usage', () => {
		expect(minSize()).toBe('')
		expect(minSize(10)).toBe('min-w-10 min-h-10')
	})

	test('without width', () => expect(minSize('', 12)).toBe('min-h-12'))

	test('without height', () => {
		expect(minSize(12, '')).toBe('min-w-12')
		expect(minSize(12, undefined)).toBe('min-w-12 min-h-12')
	})

	test('different width and height', () =>
		expect(minSize(10, 12)).toBe('min-w-10 min-h-12'))
})
