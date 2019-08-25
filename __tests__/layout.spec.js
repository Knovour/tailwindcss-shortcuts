import {
	object,
	overflow,
	place,
	absolute,
	relative,
	fixed,
	sticky,
} from '../dist/layout'

describe('object img classes', () => {
	test('default usage', () => {
		expect(object()).toBe('')
		expect(object('cover')).toBe('object-cover')
	})

	test('with multiple attributes', () =>
		expect(object('cover', 'left-bottom')).toBe(
			'object-cover object-left-bottom'
		))

	test('with empty attributes', () =>
		expect(object('cover', '', 'center-bottom')).toBe(
			'object-cover object-center-bottom'
		))
})

describe('overflow classes', () => {
	test('default usage', () => {
		expect(overflow()).toBe('')
		expect(overflow('scroll')).toBe('overflow-scroll')
	})

	test('with Y and X axis', () => {
		expect(overflow('auto', 'scroll')).toBe('overflow-y-auto overflow-x-scroll')
	})

	test('with empty attribute', () => {
		expect(overflow('', 'scroll')).toBe('overflow-x-scroll')
		expect(overflow('', undefined)).toBe('')
	})

	test('with wrong attribute', () => {
		expect(overflow('dingdingding')).toBe('')
		expect(overflow('auto', 'omg')).toBe('overflow-y-auto')
	})
})

describe('position placement classes', () => {
	test('default usage', () => {
		expect(place()).toBe('')
		expect(place(0)).toBe('inset-0')
	})

	test('with multiple attributes', () => {
		expect(place(1, 2)).toBe('inset-y-1 inset-x-2')
		expect(place(1, 2, 3)).toBe('top-1 inset-x-2 bottom-3')
		expect(place(1, 2, 3, 4)).toBe('top-1 right-2 bottom-3 left-4')
	})

	test('with negative attributes', () => {
		expect(place(1, 2, -3)).toBe('top-1 inset-x-2 -bottom-3')
		expect(place(1, -2, 3, -4)).toBe('top-1 -right-2 bottom-3 -left-4')
	})

	test('with complex attributes', () =>
		expect(place(1, undefined, 'auto', -4)).toBe('top-1 bottom-auto -left-4'))

	test('with specific position', () => {
		expect(absolute(1, 2, 3, 4)).toBe('absolute top-1 right-2 bottom-3 left-4')
		expect(relative(1, 2, 3, 4)).toBe('relative top-1 right-2 bottom-3 left-4')
		expect(fixed(1, 2, 3, 4)).toBe('fixed top-1 right-2 bottom-3 left-4')
		expect(sticky(1, 2, 3, 4)).toBe('sticky top-1 right-2 bottom-3 left-4')
	})
})
