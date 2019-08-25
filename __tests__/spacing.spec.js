import { margin, padding } from '../dist/spacing'

describe('margin classes', () => {
	test('default usage', () => {
		expect(margin()).toBe('')
		expect(margin(8)).toBe('m-8')
	})

	test('with multiple attributes', () => {
		expect(margin(1, 2)).toBe('my-1 mx-2')
		expect(margin(1, 2, 3)).toBe('mt-1 mx-2 mb-3')
		expect(margin(1, 2, 3, 4)).toBe('mt-1 mr-2 mb-3 ml-4')
	})

	test('with negative attributes', () => {
		expect(margin(1, 2)).toBe('my-1 mx-2')
		expect(margin(1, 2, -3)).toBe('mt-1 mx-2 -mb-3')
		expect(margin(1, -2, 3, -4)).toBe('mt-1 -mr-2 mb-3 -ml-4')
	})

	test('with complex attributes', () =>
		expect(margin(1, undefined, 'auto', -4)).toBe('mt-1 mb-auto -ml-4'))
})

describe('padding classes', () => {
	test('default usage', () => {
		expect(padding()).toBe('')
		expect(padding(8)).toBe('p-8')
	})

	test('with multiple attributes', () => {
		expect(padding(1, 2)).toBe('py-1 px-2')
		expect(padding(1, 2, 3)).toBe('pt-1 px-2 pb-3')
		expect(padding(1, 2, 3, 4)).toBe('pt-1 pr-2 pb-3 pl-4')
	})

	test('with complex attributes', () =>
		expect(padding(1, undefined, '0', 4)).toBe('pt-1 pb-0 pl-4'))
})
