import typescript from 'rollup-plugin-typescript2'

export default {
	input: {
		borders: 'src/borders.ts',
		extra: 'src/extra.ts',
		flexbox: 'src/flexbox.ts',
		layout: 'src/layout.ts',
		prefix: 'src/prefix.ts',
		spacing: 'src/spacing.ts',
		sizing: 'src/sizing.ts',
		typo: 'src/typo.ts',
		bg: 'src/bg.ts',
		svg: 'src/svg.ts',
		index: 'src/index.ts',
	},
	output: {
		dir: 'dist',
		format: 'esm',
		chunkFileNames: '_helpers.js',
		entryFileNames: '[name].js',
	},
	plugins: [typescript({ clean: true, useTsconfigDeclarationDir: true })],
}
