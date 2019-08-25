import { flex, flexItem } from '../dist/flexbox'

describe('flexbox classes', () => {
	test('default usage', () => {
		expect(flex()).toBe('flex')
		expect(flex('inline')).toBe('inline-flex')
	})

	test('with attributes', () => {
		expect(flex('row', 'wrap')).toBe('flex flex-row flex-wrap')
		expect(flex('inline', 'col', 'no-wrap')).toBe(
			'inline-flex flex-col flex-no-wrap'
		)
	})

	test('with wrong attributes', () => {
		expect(flex('row', '', 'initial', 0, 'blablabla')).toBe('flex flex-row')
	})

	test('with class alias', () => {
		expect(flex('middle')).toBe('flex justify-center items-center')
	})
})

describe('flexbox item classes', () => {
	test('default usage', () => expect(flexItem()).toBe(''))

	test('with attributes', () => {
		expect(flexItem('grow', 'shrink-0')).toBe('flex-grow flex-shrink-0')
	})

	test('with wrong attributes', () => {
		expect(flexItem('grow-0', '', 'inline', 'col', 0, 'blablabla')).toBe(
			'flex-grow-0'
		)
	})
})
