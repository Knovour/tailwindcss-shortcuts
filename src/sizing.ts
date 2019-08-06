import { create } from './_utils/helpers'
import { Argument } from './_utils/types'

export const size = (w: Argument = 'auto', h: Argument = w): string =>
	`${create('w')(w)} ${create('h')(h)}`.trim()

export const maxSize = (w: Argument = 'auto', h: Argument = w): string =>
	size(w, h).replace(/((w|h)-)/g, `max-$1`)

export const minSize = (w: Argument = 'auto', h: Argument = w): string =>
	size(w, h).replace(/((w|h)-)/g, `min-$1`)
