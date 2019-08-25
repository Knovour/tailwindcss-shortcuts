import { create, format, toClassList } from './_utils/helpers'

const flexAttrs = [
	'inline',
	'row',
	'row-reverse',
	'col',
	'col-reverse',
	'no-wrap',
	'wrap',
	'wrap-reverse',
	'middle',
] as const
type Flex = typeof flexAttrs[number]

export const flex = (...args: Flex[]): string => {
	const flexType = args.includes('inline') ? 'inline-flex' : 'flex'
	const classes = toClassList(
		create('flex'),
		args.filter(arg => flexAttrs.includes(arg))
	)

	return format(
		`${flexType} ${classes}`
			.replace('flex-middle', 'justify-center items-center')
			.replace('flex-inline', '')
	)
}

const items = [
	'initial',
	'1',
	1,
	'auto',
	'none',
	'grow',
	'grow-0',
	'shrink',
	'shrink-0',
] as const

type FlexItem = typeof items[number]

export const flexItem = (...args: FlexItem[]): string =>
	format(toClassList(create('flex'), args.filter(arg => items.includes(arg))))
