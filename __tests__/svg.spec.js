import { svg } from '../dist'

describe('svg classes', () => {
	test('with fill and stroke', () => {
		expect(svg('fill', 'stroke')).toBe('fill-current stroke-current')
		expect(svg('fill')).toBe('fill-current')
		expect(svg('stroke')).toBe('stroke-current')
	})

	test('ignore wrong attribute', () =>
		expect(svg('fill', 'path')).toBe('fill-current'))
})
