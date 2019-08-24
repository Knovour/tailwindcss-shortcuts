import { create } from './_utils/helpers'
import { Arg } from './_utils/types'

export const size = (w: Arg = 'auto', h: Arg = w): string =>
	`${create('w')(w)} ${create('h')(h)}`.trim()

export const maxSize = (w: Arg = 'auto', h: Arg = w): string =>
	size(w, h).replace(/((w|h)-)/g, `max-$1`)

export const minSize = (w: Arg = 'auto', h: Arg = w): string =>
	size(w, h).replace(/((w|h)-)/g, `min-$1`)
