import { font, text, list } from '../dist/typo'

describe('font classes', () => {
	test('default usage', () => {
		expect(font()).toBe('')
		expect(font('normal')).toBe('font-normal')
	})

	test('with multiple attributes', () => {
		expect(font('normal', 'sans', 'bold')).toBe(
			'font-normal font-sans font-bold'
		)
	})

	test('with class alias', () => {
		expect(font('smooth')).toBe('antialiased')
		expect(font('i')).toBe('italic')
	})

	test('with complex attributes', () =>
		expect(font('serif', '', 'semibold', 'smooth')).toBe(
			'font-serif font-semibold antialiased'
		))
})

describe('text classes', () => {
	test('default usage', () => {
		expect(text()).toBe('')
		expect(text('xl')).toBe('text-xl')
	})

	test('with multiple attributes', () =>
		expect(text('xl', 'white', 'center')).toBe(
			'text-xl text-white text-center'
		))

	test('with class alias', () => {
		expect(text('upper')).toBe('uppercase')
		expect(text('lower')).toBe('lowercase')
		expect(text('cap')).toBe('capitalize')
	})

	test('with complex attributes', () =>
		expect(text('center', '', 'white', 'lower')).toBe(
			'text-center text-white lowercase'
		))
})

describe('list classes', () => {
	test('default usage', () => {
		expect(list()).toBe('')
		expect(list('none')).toBe('list-none')
	})

	test('with multiple attributes', () =>
		expect(list('none', 'outside')).toBe('list-none list-outside'))

	test('with complex attributes', () =>
		expect(list('none', '', 'outside')).toBe('list-none list-outside'))
})
