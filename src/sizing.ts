import { create } from './_utils/helpers'
import { Arg } from './_utils/types'

export const size = (w: Arg, h: Arg = w): string =>
	`${create('w')(w)} ${create('h')(h)}`.trim()

export const maxSize = (w: Arg, h: Arg = w): string =>
	`${create('max-w')(w)} ${create('max-h')(h)}`.trim()

export const minSize = (w: Arg, h: Arg = w): string =>
	`${create('min-w')(w)} ${create('min-h')(h)}`.trim()
