const svgClass = {
	fill: 'fill-current',
	stroke: 'stroke-current',
}

export default (...attrs: ('fill' | 'stroke')[]): string =>
	attrs
		.map(target => svgClass[target] || '')
		.join(' ')
		.trim()
